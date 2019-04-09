<template>
    <div class="finalRoundTeamWrapper">
        <div class="teamDetails">
            <h5><strong>{{ team.codeName | nameFormatter }}</strong></h5>
            <h2 class="text-info"><strong>{{ team.codeNumber }}</strong></h2>
        </div>
        <div class="teamMembers">
            <div v-for="member in team.users" :key="member.id" class="team-member">
                <div class="team-member-thumbnail-wrapper">
                    <img v-if="!member.userPicture" src="https://hairo.e.f1v.co/wp-content/themes/romisa/images/placeholder.jpg"
                         class="img-responsive">
                    <img v-else :src="member.userPicture" class="img-responsive">
                </div>
                <h5>{{ member.name | nameFormatter }}</h5>
            </div>
        </div>
    </div>
</template>

<script>
    import filters from "../assets/filters"

    export default {
      props: {
        team: {
          required: true,
          type: Object
        }
      },
      mixins: [filters]
    }
</script>

<style scoped>
    .finalRoundTeamWrapper {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        padding: 0;
    }

    .teamDetails {
        flex-basis: 20%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: .5rem;
    }

    .teamMembers {
        flex-basis: 80%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        padding: .5rem;
    }

    .team-member h5 { text-align: center; font-size: 1rem; padding: 0; }
    .team-member {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-basis: 15%;
        margin: 1rem;
    }

    .team-member-thumbnail-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        margin-bottom: .5rem;
        border: 4px solid white;
    }
    .team-member-thumbnail-wrapper img { min-width: 100%; width: 100%; }

    @media screen and (max-width: 1440px) and (min-width: 1201px) {
        .container {width: 80%;}
    }

    @media screen and (max-width: 1200px) {
        .finalRoundTeamWrapper {
            overflow-x: scroll;
        }
        .team-member { margin: 0; flex-basis: 20%; text-align: center; }
        .team-member h5 { font-size: 1rem; }
    }

    @media screen and (max-width: 767px) {
        h1 { margin-bottom: 0; }
        h3 { font-size: 1.5rem; }
        h4 { font-size: 1.2rem; }
        h5 { padding: 0; }
        .team-member { margin: .5rem; flex-basis: 20%; }
        .team-member-thumbnail-wrapper { height: 100px; width: 100px; }
    }

    @media screen and (max-width: 380px) {
        h5 { font-size: 1rem; padding: 0 1rem; }
        .team-member h5 { padding: 0; font-size: 1rem; }
    }



</style>