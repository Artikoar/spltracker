const apiLink = 'https://lldev.thespacedevs.com/2.2.0'

export default {
	launches: {
		all: `${apiLink}/launch`,
		upcoming: `${apiLink}/launch/upcoming`,
		launchById: id => `${apiLink}/launch/${id}`
	}
}