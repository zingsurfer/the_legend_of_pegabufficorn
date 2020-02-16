DOCKER RUN SOURCE: https://medium.com/better-programming/how-to-deploy-a-node-app-on-aws-elastic-beanstalk-with-docker-9664e5841fe

docker build --tag=node-docker-eb .


docker run -p 80:3000 node-docker-eb



If you open your browser at http://localhost:80 (which is the same as http://localhost), you should see your app again:
