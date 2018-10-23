<template>
  <div class="container-fluid">
    <div class="container">
      <img class="herzel" src="../../static/herzel_black.png">
      <h2>Self-Training Resources</h2>
      <div class="row">
        <div class="col-lg-12">
          <h3>What are these resources?</h3>
          <h5>This page's goal is to provide the participants with the tools necessary to build a prototype in a short time frame.</h5>
          <br>
          <p>If you wish to participate in HackIDC and have a technical background but little to no experience, start by finding out about these common yet very important subjects.</p>
          <p>As part of the agenda of promoting talented students, HackIDC encourage you to start your training on your own. These links are intended to guide young programmers, who wish to turn their basic coding skills into real experience, through their first Hackathon.</p>
          <p></p>
        </div>
      </div>
      <div class="row cards-list">
        <a class="card top-card mb-3 mr-3" :href="top.link" target="_blank">
          <img class="card-img-top" :src="top.thumbnail">
          <div class="card-body">
            <h4 class="card-title">{{ top.title }}</h4>
            <span v-for="tag in top.tags" class="badge badge-info mr-1">{{ tag }}</span>
          </div>
        </a>
      </div>
      <div class="row cards-list">
        <a class="card mb-3 mr-3" v-for="(r, i) in shuffle(resources)" :key="i" :href="r.link" target="_blank">
          <img class="card-img-top" :src="r.thumbnail">
          <div class="card-body">
            <h4 class="card-title">{{ r.title }}</h4>
            <span v-for="tag in r.tags" class="badge badge-info mr-1">{{ tag }}</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import {shuffle} from '../assets/methods'
export default {
  methods: {
    shuffle,
  },
  data() {
    return {
      top: {
        title: 'First Hackathon? 6 Things You Need to Know',
        link: 'https://medium.com/@ginnyfahs/first-hackathon-here-are-6-things-you-need-to-know-46640c3ef72e',
        tags: ['hackathon', 'rookies', 'team-project', 'tips', 'hello-world'],
        thumbnail: 'http://www.mblock.cc/wp-content/uploads/2018/08/hackathon-1-1024x430.png'
      },
      resources: [
        {
          title: 'Working with GitHub',
          link: 'https://guides.github.com/activities/hello-world/',
          tags: ['github', 'version-control', 'team-project'],
          thumbnail: 'http://www.ikrish.com/img/github-universe.jpg'
        },
        {
          title: 'SQL Basics',
          link: 'https://www.dataquest.io/blog/sql-basics/',
          tags: ['SQL', 'database', 'data-management'],
          thumbnail: 'https://datadog-prod.imgix.net/img/blog/monitor-azure-sql-databases-datadog/2016-azure-sql-integrations-1.png'
        },
        {
          title: 'Node.js & Express.js',
          link: 'https://medium.com/@LindaVivah/the-beginners-guide-understanding-node-js-express-js-fundamentals-e15493462be1',
          tags: ['node.js', 'express.js', 'javascript', 'back-end'],
          thumbnail: 'https://www.valuecoders.com/blog/wp-content/uploads/2018/05/featured.jpg'
        },
        {
          title: 'Basics of MongoDB',
          link: 'https://www.codeproject.com/Articles/828392/Basics-of-MongoDB',
          tags: ['mongoDB', 'database', 'data-management'],
          thumbnail: 'https://coursework.vschool.io/content/images/2015/11/f0c6acff24bc794.png'
        },
        {
          title: 'No-SQL Databases',
          link: 'https://www.mongodb.com/nosql-explained',
          tags: ['no-sql', 'database', 'data-management'],
          thumbnail: 'http://pragatisoftware.com/wp-content/uploads/blog/blog_home_icons/an_introduction_to_nosql.jpg'
        },
        {
          title: 'Cloud Hosting 101',
          link: 'https://www.digitalocean.com/community/tutorials/an-introduction-to-cloud-hosting',
          tags: ['cloud-service', 'hosting', 'servers'],
          thumbnail: 'https://comtechies.com/wp-content/uploads/2017/07/7-reasons-to-switch-to-cloud-hosting-in-2017.jpg'
        },
        {
          title: 'Java basics',
          link: 'https://www.guru99.com/java-tutorial.html',
          tags: ['code', 'java', 'programming'],
          thumbnail: 'https://www.molodnews.info/wp-content/uploads/2018/02/java-bg.jpg'
        },
        {
          title: 'Python basics',
          link: 'https://www.guru99.com/python-tutorials.html',
          tags: ['code', 'python', 'programming'],
          thumbnail: 'https://www.avantit.no/wp-content/uploads/2018/10/Lozingle_10032014.jpg'
        }
      ]
    }
  }
}
</script>
<style scoped>
  .container-fluid {
    padding: 8rem 0;
    min-height: 1000px;
    background-color: #f7f7f7;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .row {
    padding-bottom: 4rem;
    width: 100%;
  }
  .herzel {
    width: 10%;
    margin-bottom: 2rem;
  }
  h2 {font-weight: bold; margin-bottom: 4rem;}
  .cards-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .card {
    flex-basis: 31%;
    text-decoration: none;
    color: #000;
  }
  .top-card {flex-basis: 100%;}
  .top-card img {height: 300px;}
  .card-body {padding: 1rem; border-top: 1px solid #eee;}
  .card-title {font-weight: bold;}
  .card-img-top {height: 180px;}
</style>
