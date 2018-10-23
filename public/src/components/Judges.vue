<template>
  <div class="container-fluid">
    <div class="container">
      <h2>The Judges</h2>
      <br>
      <div class="row">
        <div v-for="(j,i) in judges" :key="i" class="judges-item col-lg-4 col-sm-6">
          <img class="img-responsive" :src="j.thumbnail">
          <h5>{{ j.name }}</h5>
          <p>{{ j.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      judges: [
        {
          name: 'Ariel Shamir',
          title: 'Dean of Efi Arazi school of Computer Science, IDC Herzliya',
          thumbnail: 'https://res.cloudinary.com/bizzaboprod/image/upload/v1521130553/kwmjgbfyvxkmnlwd9nhx.png'
        },
        {
          name: 'Ariel Shamir',
          title: 'Dean of Efi Arazi school of Computer Science, IDC Herzliya',
          thumbnail: 'https://res.cloudinary.com/bizzaboprod/image/upload/v1521130553/kwmjgbfyvxkmnlwd9nhx.png'
        },
        {
          name: 'Ariel Shamir',
          title: 'Dean of Efi Arazi school of Computer Science, IDC Herzliya',
          thumbnail: 'https://res.cloudinary.com/bizzaboprod/image/upload/v1521130553/kwmjgbfyvxkmnlwd9nhx.png'
        },
        {
          name: 'Ariel Shamir',
          title: 'Dean of Efi Arazi school of Computer Science, IDC Herzliya',
          thumbnail: 'https://res.cloudinary.com/bizzaboprod/image/upload/v1521130553/kwmjgbfyvxkmnlwd9nhx.png'
        },
        {
          name: 'Ariel Shamir',
          title: 'Dean of Efi Arazi school of Computer Science, IDC Herzliya',
          thumbnail: 'https://res.cloudinary.com/bizzaboprod/image/upload/v1521130553/kwmjgbfyvxkmnlwd9nhx.png'
        },
        {
          name: 'Ariel Shamir',
          title: 'Dean of Efi Arazi school of Computer Science, IDC Herzliya',
          thumbnail: 'https://res.cloudinary.com/bizzaboprod/image/upload/v1521130553/kwmjgbfyvxkmnlwd9nhx.png'
        },
      ]
    }
  }
}
</script>
<style scoped>
  .container-fluid {
    padding: 4rem 0;
    background-color: #f7f7f7;
  }
  .judges-item:hover > img {
    transform: scale(1.03);
  }
  .judges-item {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h5 {font-weight: bold;}
  p {
    padding: 0 1rem;
    text-align: center;
  }
  h2 {font-weight: bold; text-align: center;}
  img {
    transition: all .2s ease-out;
    margin-bottom: 1rem;
    width: 70%;
    border-radius: 50%;
  }
</style>
