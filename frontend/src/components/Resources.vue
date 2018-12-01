<template>
  <div class="container-fluid">
      <div class="container">
        <img class="herzel" src="../../static/herzel_black.png">
        <h2>Self-Training Resources</h2>
        <div class="row">
          <div class="col-lg-12">
            <h3>What are these resources?</h3>
            <h5>This page's goal is to provide participants the tools necessary to build a prototype in a short time frame.</h5>
            <br>
            <p>If you wish to participate in HackIDC and have a technical background but little to no experience, start by finding out about these common yet very important subjects.</p>
            <p>As part of the agenda of promoting talented students, HackIDC encourage you to start your training on your own. These links are intended to guide young programmers, who wish to turn their basic coding skills into real experience, through their first Hackathon.</p>
            <p></p>
          </div>
        </div>
        <div class="row">
          <ul class="nav nav-tabs" id="tab-navigator" role="tablist">
            <li class="nav-item tab-nav-item" v-for="(c, i) in categories" :key="i">
              <a class="nav-link tab-nav-link" :id="c.id + '-tab'" data-toggle="tab"
                 :href="'#'+c.id" role="tab" :aria-controls="c.id" aria-selected="true">{{ c.name }}</a>
            </li>
          </ul>
          <div class="tab-content" id="tab-content-container">
            <div v-for="(c, i) in categories" class="tab-pane fade" :key="i" :id="c.id" role="tabpanel" :aria-labelledby="c.id + '-tab'">
              <a v-for="(item, i) in c.items" :href="item.link" target="_blank" :key="i" class="card mb-3 mr-3">
                <img :src="item.thumbnail" class="card-img-top">
                <div class="card-body">
                  <h5 class="card-title">{{ item.title }}</h5>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  mounted() {
    document.getElementsByClassName('tab-nav-item')[0].classList.add('active');
    document.getElementsByClassName('tab-nav-link')[0].classList.add('active');
    document.getElementsByClassName('tab-pane')[0].classList.add('active', 'show');
  },
  data() {
    return {
      categories: {
        tips: {
          id: 'tips',
          name: 'Tips & Tricks',
          items: [
            {
              title: 'The Hackathon Toolbox',
              link: 'https://www.thecodeship.com/general/hackathon-toolbox-essential-tools-practices/',
              thumbnail: 'http://engineering.indeedblog.com/wp-content/uploads/2014/01/hacktee.png'
            },
            {
              title: 'Hackathon-ing as a Non-Developer',
              link: 'https://medium.com/@xinisterlayer/hackathon-ing-as-a-non-developer-ec994e50458c',
              thumbnail: 'https://cdn-images-1.medium.com/max/2000/1*0QbvXqleQASAZ0oaAfY66w.jpeg'
            },
            {
              title: 'Hackathon: Important Tips',
              link: 'https://medium.com/@ginnyfahs/first-hackathon-here-are-6-things-you-need-to-know-46640c3ef72e',
              thumbnail: 'http://www.mblock.cc/wp-content/uploads/2018/08/hackathon-1-1024x430.png'
            },
            {
              title: 'Prepare for a Hackathon',
              link: 'https://sendgrid.com/blog/prepare-hackathon/',
              thumbnail: 'https://blog.westmonroepartners.com/wp-content/uploads/2017/07/hack.png'
            }
          ]
        },
        languages: {
          id: 'languages',
          name: 'Programming Languages',
          items: [
            {
              title: 'Java basics',
              link: 'https://www.guru99.com/java-tutorial.html',
              thumbnail: 'https://www.molodnews.info/wp-content/uploads/2018/02/java-bg.jpg'
            },
            {
              title: 'Python basics',
              link: 'https://www.guru99.com/python-tutorials.html',
              thumbnail: 'https://www.avantit.no/wp-content/uploads/2018/10/Lozingle_10032014.jpg'
            },
            {
              title: 'Node.js & Express.js',
              link: 'https://medium.com/@LindaVivah/the-beginners-guide-understanding-node-js-express-js-fundamentals-e15493462be1',
              thumbnail: 'https://www.valuecoders.com/blog/wp-content/uploads/2018/05/featured.jpg'
            },
            {
              title: 'HTML & CSS',
              link: 'https://learn.shayhowe.com/html-css/',
              thumbnail: 'https://cdn-images-1.medium.com/max/1344/1*Q8w9PI58DKjolhl5aDeiOQ.png'
            },
            {
              title: 'Swift Basics',
              link: 'https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html',
              thumbnail: 'https://www.theinquirer.net/w-images/4aac0508-77fc-41eb-aab5-4a55bd1e07a8/0/swiftlogo-580x358.jpeg'
            },
          ],
        },
        habits: {
          id: 'habits',
          name: 'Working Habits',
          items: [
            {
              title: 'Working with GitHub',
              link: 'https://guides.github.com/activities/hello-world/',
              thumbnail: 'http://www.ikrish.com/img/github-universe.jpg'
            },
            {
              title: 'GitHub In Depth',
              link: 'https://git-scm.com/book/en/v2',
              thumbnail: 'https://cdn-images-1.medium.com/max/2000/1*CmjmgiI3Sr6oByNZ81pkhQ.jpeg'
            }
          ],
        },
        databases: {
          id: 'databases',
          name: 'Databases',
          items: [
            {
              title: 'SQL Basics',
              link: 'https://www.dataquest.io/blog/sql-basics/',
              thumbnail: 'https://datadog-prod.imgix.net/img/blog/monitor-azure-sql-databases-datadog/2016-azure-sql-integrations-1.png'
            },
            {
              title: 'No-SQL Databases',
              link: 'https://www.mongodb.com/nosql-explained',
              thumbnail: 'http://pragatisoftware.com/wp-content/uploads/blog/blog_home_icons/an_introduction_to_nosql.jpg'
            },
            {
              title: 'Basics of MongoDB',
              link: 'https://www.codeproject.com/Articles/828392/Basics-of-MongoDB',
              thumbnail: 'https://coursework.vschool.io/content/images/2015/11/f0c6acff24bc794.png'
            },
          ],
        },
        services: {
          id: 'services',
          name: 'Services',
          items: [
            {
              title: 'Cloud Hosting 101',
              link: 'https://www.digitalocean.com/community/tutorials/an-introduction-to-cloud-hosting',
              thumbnail: 'https://comtechies.com/wp-content/uploads/2017/07/7-reasons-to-switch-to-cloud-hosting-in-2017.jpg'
            },
          ],
        }
      },
    }
  }
}
</script>
<style scoped>
  .container-fluid {
    margin-top: 3rem;
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
  h2 {font-weight: bold; margin-bottom: 4rem; text-align: center;}
  .nav-link {color: #000;}
  .tab-content {
    padding: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    background-color: #fdfdfd;
    border: 1px solid #f3f3f3;
    width: 100%;
    min-height: 500px;
  }
  .tab-content > .active {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
  }
  .card {
    flex-basis: 31%;
    text-decoration: none;
    text-align: center;
    color: #000;
  }
  .card-body {padding: 1rem; border-top: 1px solid #eee;}
  .card-title {font-weight: bold;}
  .card-img-top {height: 150px;}

  @media screen and (max-width: 1440px) and (min-width: 1201px) {
    .container {width: 80%;}
  }

  @media screen and (max-width: 1200px) {
    .card {flex-basis: 48%; margin-right: .5rem !important;}
    .card-img-top {height: 160px;}
  }

  @media screen and (max-width: 767px) {
    .herzel {width: 20%;}
    .tab-content {justify-content: center; padding: 2rem 1rem;}
    .tab-content > .active {justify-content: center}
    .card {flex-basis: 100%; margin-right: 0 !important;}
    .card-body {padding: .5rem; border-top: 1px solid #eee;}
    .card-title {font-weight: bold; font-size: 1.2rem; text-align: center;}
    .card-img-top {height: 180px;}
  }
</style>
