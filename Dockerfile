FROM node:19
WORKDIR /park-APP
EXPOSE 8100
COPY . .
RUN npm install -g cordova ionic
RUN npm install
ENTRYPOINT ["ionic"]
CMD ["serve", "--external", "--no-open"]