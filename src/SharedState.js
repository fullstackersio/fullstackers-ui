export default {
  presentations: [{
    'id': 5,
    'type': 'video',
    'group': {
      'groupid': 8,
      'name': 'jSTL',
      'url': ''
    },
    'url': 'https://www.youtube.com/embed/nxkM3I2MBcs?start=0',
    'youtube_id': 'nxkM3I2MBcs',
    'title': 'Vue Ecosystem',
    'date_created': '2017-06-01',
    'date_uploaded': '2018-01-22',
    'user': {
      'userid': 4,
      'name': 'user4'
    },
    'tags': [{
      'tagid': 1,
      'tag': 'Vue'
    }, {
      'tagid': 3,
      'tag': 'JavaScript'
    }],
    'speakers': [{
      'speakerid': 4,
      'speaker': 'Chris Schmitz',
      'email': 'user4@gmail.com'
    }],
    'approved_ind': 1,
    'flagged_ind': 0,
    'delete_ind': 0
  },
  {
    'id': 3,
    'type': 'video',
    'group': {
      'groupid': 9,
      'name': 'Stl Full Stack'
    },
    'url': 'https://www.youtube.com/embed/gsCRrbRPVj4?start=0',
    'youtube_id': 'gsCRrbRPVj4',
    'title': 'Getting Started with Vagrant',
    'date_created': '2017-06-01',
    'date_uploaded': '2018-01-22',
    'user': {
      'userid': 77,
      'name': 'user77'
    },
    'tags': [{
      'tagid': 9,
      'tag': 'Vagrant'
    }, {
      'tagid': 88,
      'tag': 'Provisioning'
    }],
    'speakers': [{
      'speakerid': 77,
      'speaker': 'Matt Thomas',
      'email': 'user77@aol.com',
      'gitub': 'github.com/user77'
    }],
    'approved_ind': 1,
    'flagged_ind': 0,
    'delete_ind': 0
  },
  {
    'id': 4,
    'type': 'video',
    'group': {
      'groupid': 9,
      'name': 'Stl Full Stack',
      'url': 'https://www.meetup.com/SaintLouis_FullStack_WebDevelopment'
    },
    'url': 'https://www.youtube.com/embed/gxBEFfmkZ5w?start=0',
    'youtube_id': 'gxBEFfmkZ5w',
    'title': 'Amazon Web Services',
    'date_created': '2017-06-01',
    'date_uploaded': '2018-01-22',
    'user': {
      'userid': 12,
      'name': 'user12'
    },
    'tags': [{
      'tagid': 11,
      'tag': 'AWS'
    }, {
      'tagid': 34,
      'tag': 'Cloud'
    }],
    'speakers': [{
      'speakerid': 4,
      'speaker': 'Brian Jones',
      'github': 'github.com/user4',
      'linkedin': 'linkedin.com/user4'
    }],
    'approved_ind': 1,
    'flagged_ind': 0,
    'delete_ind': 0
  }],
  resources: [{
    'id': 55,
    'type': 'page',
    'paid_ind': 0,
    'date_created': '2017-06-01',
    'date_uploaded': '2018-01-22',
    'url': 'https://vuejs.org/v2/guide/',
    'user': {
      'userid': 4,
      'name': 'user4'
    },
    'tags': [{
      'tagid': 15,
      'tag': 'Vue'
    }, {
      'tagid': 77,
      'tag': 'JavaScript'
    }],
    'approved_ind': 1,
    'flagged_ind': 0,
    'delete_ind': 0
  },
  {
    'id': 712,
    'type': 'video',
    'paid_ind': 1,
    'date_created': '2016-11-01',
    'date_uploaded': '2018-01-04',
    'url': 'https://laracasts.com/series/learn-vue-2-step-by-step',
    'user': {
      'userid': 56,
      'name': 'user56'
    },
    'tags': [{
      'tagid': 15,
      'tag': 'Vue'
    }, {
      'tagid': 77,
      'tag': 'JavaScript'
    }],
    'approved_ind': 0,
    'flagged_ind': 0,
    'delete_ind': 0
  }],

  findPresentation: function (id) {
    console.log(id)
    return this.presentations.filter(function (presentation) {
      if (presentation.id === parseInt(id)) {
        console.log('found')
        return presentation
      }
    })
  }
}
