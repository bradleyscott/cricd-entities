
############################################################
# Dockerfile to run cricd-entities sails.js API application
############################################################

FROM iojs:slim

MAINTAINER Bradley Scott <bradley.s.scott@gmail.com>

RUN apt-get update && \
    apt-get install -y git

RUN npm install -g sails grunt bower pm2 npm-check-updates

# Pull down the source from the repo and download dependencies
RUN git clone git://github.com/bradleyscott/cricd-entities.git \
	&& cd cricd-entities \
	&& npm install

# Define working directory.
WORKDIR /cricd-entities

# Start the service
CMD sails lift

# Expose ports.
EXPOSE 1337