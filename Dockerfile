# sudo docker build -t githubusers .
# sudo docker run -it githubusers
# FROM ubuntu:18.04
FROM circleci/node:12-browsers
# USER node
USER circleci
RUN usermod -aG sudo circleci
WORKDIR /app
COPY . /app
RUN chown circleci:circleci * -R
# USER docker
# RUN npm i
CMD bash

