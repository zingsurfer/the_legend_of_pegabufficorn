DOCKERFILE SOURCE: https://medium.com/better-programming/how-to-deploy-a-node-app-on-aws-elastic-beanstalk-with-docker-9664e5841fe

Phase.io SOURCE: http://phaser.io/tutorials/making-your-first-phaser-3-game/part1


EBS + Docker SOURCE: https://medium.com/@sommershurbaji/deploying-a-docker-container-to-aws-with-elastic-beanstalk-28adfd6e7e95


----------------
RUN Docker image locally:

docker build --tag=pegabufficorn .


docker run -p 80:3000 pegabufficorn



If you open your browser at http://localhost, you should see your phaser html-5 game running in Docker!!
