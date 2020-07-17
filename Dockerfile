# sudo docker build -t githubusers .
# sudo docker run -it githubusers
FROM circleci/node:12-browsers
WORKDIR /app
COPY --chown=circleci:circleci . /app
# RUN chown circleci:circleci * -R
RUN npm i
CMD bash

