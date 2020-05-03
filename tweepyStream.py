# import tweepy
from tweepy.streaming import StreamListener
from tweepy import OAuthHandler
from tweepy import Stream

import CREDENTIALS


class TweetListner(StreamListener):

    def on_data(self, data):
        print(data)
        return True

    def on_error(self, status):
        print(status)


if __name__ == "__main__":
    listner = TweetListner()
    auth = OAuthHandler(CREDENTIALS.CONSUMER_KEY, CREDENTIALS.CONSUMER_SECRET)
    auth.set_access_token(CREDENTIALS.ACCESS_TOKEN,
                          CREDENTIALS.ACCESS_TOKEN_SECRET)

    stream = Stream(auth, listner)

    stream.filter(track=['infosys'])
