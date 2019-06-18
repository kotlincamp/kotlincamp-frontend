 const db = require('./db');

const getFeaturedItems = async () => {
  let collection = db.collection('featured-items')
  let featuredArray = [];
  return await collection.get().then((querySnapshot => {
    querySnapshot.forEach(doc => {
      let temp = doc.data()
      temp.id = doc.id
      featuredArray.push(temp)
    })
  })).then(() => featuredArray);
}

const getHeaderImages = async () => {
  let headerImages = [];
  try {
    let headerImageObj = await db.collection('header-images').get();
    headerImageObj.forEach(image => {
      let temp = image.data();
      temp.id = image.id;
      headerImages.push(temp);
    })
  } catch (e) {
    console.error('error getting header images', e);
  } finally {
    return headerImages;
  }
}

const getTeamMembers = async () => {
  let teamArray = [];
  try {
    let teamObj = await db.collection('team').get();
    teamObj.forEach(member => {
      let temp = member.data();
      temp.id = member.id;
      teamArray.push(temp);
    })
  } catch (e) {
    console.error('error getting team members', e)
  } finally {
    return teamArray;
  }
}

const getCurriculum = async () => {
  let curriculumArray = [];
  try {
    let curriculumObj = await db.collection('curriculum').get();
    curriculumObj.forEach(lesson => {
      let temp = lesson.data();
      temp.id = lesson.id;
      curriculumArray.push(temp);
  })
  } catch (e) {
    console.error('Error loading curriculum from database: ', e);
  } finally {
    return curriculumArray;
  }
}

const addContact = async contact => {
  try {
    return await db.collection('contacts').add(contact)
  } catch (e) {
    console.error('Error adding contact to database: ', e);
  }
}

const getEvents = async () => {
  let collection = db.collection('events')
  let eventsArray = [];
  try {
    return await collection.get().then((querySnapshot => {
      querySnapshot.forEach(event => {
        let temp = event.data()
        temp.id = event.id
        eventsArray.push(temp)
      })
    })).then(() => eventsArray)
  } catch (e) {
    console.error('error fetching events', e);
  } finally {
    return eventsArray
  }
}

const getSiteInfo = async () => {
  let docRef = db.collection('site-info').doc('main')
  try {
    return await docRef.get().then(doc => {
      let { title, mission, image } = doc.data()
      return { title: title, mission: mission, image: image }
    })
  } catch (e) {
    console.error('error retrieving site info', e);
    return { title: '', mission: '', image: '' }
  }
}

export { getFeaturedItems, addContact, getCurriculum, getTeamMembers, getHeaderImages, getEvents, getSiteInfo }
