from tweepy import API
from tweepy import Cursor

from tweepy.streaming import StreamListener
from tweepy import OAuthHandler
from tweepy import Stream

import CREDENTIALS


class TwitterClient():
    def __init__(self):
        self.auth = TwitterAuthenticator.authenticateTwitterApp()
        self.twitter_client = API(self.auth)

    def get_user_timeline_tweets(self, num_tweets):
        tweets = []
        for tweet in Cursor(self.twitter_client.user_timeline).items(num_tweets):
            tweets.append(tweet)
        return tweets



# # # # TWITTER AUTHENTICATION # # # #
class TwitterAuthenticator():

    def authenticateTwitterApp(self):
        auth = OAuthHandler(CREDENTIALS.CONSUMER_KEY,
                            CREDENTIALS.CONSUMER_SECRET)
        auth.set_access_token(CREDENTIALS.ACCESS_TOKEN,
                              CREDENTIALS.ACCESS_TOKEN_SECRET)
        return auth


class TwitterStreamer():
    """
    Class for streaming and processing live tweets.
    """

    def __init__(self):
        self.twitter_authenticator = TwitterAuthenticator()

    def stream_tweets(self, fetched_tweets_filename, hash_tag_list):
        # This handles Twitter authetification and the connection to Twitter Streaming API
        listener = TwitterListner(fetched_tweets_filename)
        auth = self.twitter_authenticator.authenticateTwitterApp()
        stream = Stream(auth, listener)

        # This line filter Twitter Streams to capture data by the keywords:
        stream.filter(track=hash_tag_list)


# # # # TWITTER STREAM LISTENER # # # #
class TwitterListner(StreamListener):
    """
    This is a basic listener that just prints received tweets to stdout.
    """

    def __init__(self, fetched_tweets_filename):
        self.fetched_tweets_filename = fetched_tweets_filename

    def on_data(self, data):
        try:
            print(data)
            with open(self.fetched_tweets_filename, 'a') as tf:
                tf.write(data)
            return True
        except BaseException as e:
            print("Error on_data %s" % str(e))
        return True

    def on_error(self, status):
        if status == 420:
            return False
        print(status)


if __name__ == '__main__':

    # Authenticate using config.py and connect to Twitter Streaming API.
    hash_tag_list = ["donal trump", "hillary clinton",
                     "barack obama", "bernie sanders"]
    fetched_tweets_filename = "tweets.json"

    twitter_client = TwitterClient()
    print(twitter_client.get_user_timeline_tweets(5))
    # twitter_streamer = TwitterStreamer()
    # twitter_streamer.stream_tweets(fetched_tweets_filename, hash_tag_list)
