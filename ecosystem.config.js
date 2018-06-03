module.exports = {
	apps: [{
		name: 'Brewsa',
		script: './index.js'
	}],
	deploy: {
		production: {
			user: 'ubuntu',
			host: 'ec2-54-153-198-42.ap-southwest-2.compute.amazonaws.com'
			key: '~/.ssh/aws-k3y.pem',
			ref: 'origin/master',
			repo: 'git@github.com:uhrjf/brewsa.git',
			path: '/home/ubuntu/brewsa'.
			'post-deploy': 'nmp install && pm2 startOrRestart
	ecosystem.config.js'
		}
	}
}
