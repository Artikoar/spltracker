const apiLink = 'https://lldev.thespacedevs.com/2.2.0';

export default {
  launches: {
    upcomingWithKey: `/get?url=${apiLink}/launch/upcoming`,
    upcoming: `${apiLink}/launch/upcoming`,
    // launchById: (id) => `${apiLink}/launch/${id}`,
  },
  
};