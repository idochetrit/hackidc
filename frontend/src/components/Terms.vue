<template>
    <div class="container-fluid">
        <div class="container">
            <img class="herzel" src="../../static/herzel_black.png">
            <h2>Terms and Conditions</h2>
            <div class="row flags">
                <div class="flag-icon"><img @click="toggleEnglish" src="../../static/united-states.png"></div>
                <div class="flag-icon"><img @click="toggleHebrew" src="../../static/israel.png"></div>
            </div>
            <transition mode="out-in" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                <div :key="1" v-if="isEnglish" class="row">
                    <div class="col-lg-12">
                        <h5><strong>Headling for terms section</strong></h5>
                        <h6><strong>Sub-Headling for terms section</strong></h6>
                        <p>Lorem ipsum dolor sit amet, oratio melius audire pri et, in appetere vituperata vim, ex eirmod incorrupte quaerendum cum. Debet viderer phaedrum ius in, malorum rationibus ei sea. Et pri soluta iuvaret neglegentur, facilis voluptatum nam cu. Nam volumus eligendi incorrupte no, adversarium concludaturque ad vix.</p>
                        <p>Id vis sale magna intellegat. Sit id fastidii delectus reprimique. Clita salutandi reprehendunt at est, ius no summo accusamus, suas eius possim cu per. Ut quis alterum admodum sit. Ad eam rebum facilisi delicata, at dico accommodare eos. Et singulis adolescens pro, no per tractatos philosophia. Ad ius diceret referrentur, eu eam eruditi voluptua.</p>
                        <p>Offendit invidunt platonem mei ad, et wisi omnesque adversarium sea. Unum impedit sit in. Ut vim discere adolescens. Vel facer aeque impetus in, qui no epicurei indoctum salutandi, has eu posse graece.</p>
                        <p>Ex mazim sapientem scribentur ius, his ei ipsum atomorum, diam dicta eum te. Omittam eloquentiam ei eos, nihil ubique sed ex. Suas doming meliore an cum, ne sed suscipit apeirian. Quo ignota vocibus ea, magna blandit propriae ad vix, tation accommodare mea ex. Nec ut malorum nonumes atomorum.</p>
                        <p>Mel hinc inermis tibique ei, regione dissentiet in has. Eu verear suscipit duo. Tempor percipitur vel in. Te sit ponderum quaerendum.</p>
                        <p>Te corpora intellegat quo. Ad qui dolores percipitur, fuisset epicuri cu per, ius petentium gloriatur at. His iudico repudiare id, illum maluisset an mel. Per an viris laudem, in solum facilisis contentiones vel. Mei ne tota incorrupte, oportere elaboraret ius cu. Ex sit mundi nihil putant, fugit mollis ad vis, vis ponderum torquatos persequeris te.</p>
                    </div>
                </div>
                <div :key="2" v-else class="row heb">
                    <div class="col-lg-12">
                        <h5><strong>כותרת לחלק בתנאי השימוש</strong></h5>
                        <h6><strong>תת - כותרת לחלק בתנאי השימוש</strong></h6>
                        <p>מדעי גרמנית אקטואליה או היא. מדע שפות מבוקשים אל, חפש תורת איטליה מיוחדים את, כתב ב סרבול ביולי מועמדים. אל אנא מרצועת ופיתוחה, אם זכר עזרה שינויים. לחבר לעברית תיאטרון רבה את, על היא וכמקובל טכנולוגיה אנציקלופדיה.</p>
                        <p>והוא לתרום הסביבה רבה דת, או בקר הספרות אנציקלופדיה. היום כדור חינוך מדע אם, לעריכת אווירונאוטיקה את שכל, קבלו המזנון או בקר. החול נוסחאות אקטואליה מתן את, של בקרבת איטליה כלל, סרבול רפואה התוכן את לוח. תנך התוכן וספציפיים דת, אחד ביוני בדפים משופרות אם. ארץ אם צילום מחליטה קודמות, בה הבאים ביוטכנולוגיה צ'ט.</p>
                        <p>תיבת עמוד מיותר על רבה. את שתי לכאן פולנית, החלה נבחרים אתה גם. העיר בהבנה רשימות או בקר, חשמל כלכלה משפטים דת שכל. הבהרה פוליטיקה סדר אם, לעתים ביולי המקובל כלל על. ב אחד בארגז מרצועת, צ'ט כניסה רביעי שימושי ב.</p>
                        <p>למאמרים למתחילים בה בדף. כלים בגרסה מועמדים את היא, בה שפות ייִדיש לוח. בקר אל תבניות וכמקובל, כימיה מדויקים אם זכר. של עוד תוכל בהתייחסות, את כניסה בדפים ספינות צעד. אל אתה קסאם דרכה מדריכים, מה כניסה רשימות ארץ.</p>
                        <p>על תרבות משפטים המדינה סדר, פנאי העזרה מחליטה כדי או. מלא או אינו בארגז אנתרופולוגיה, בה החלה רקטות קלאסיים כתב, בדף או יוני לויקיפדיה. מדינות ויקיפדיה בהתייחסות כדי גם, זכויות הגולשות מדע ב. אל ויש כלים ערכים. העמוד בגרסה ב עוד.</p>
                        <p>או כדי היום מתמטיקה וספציפיים. מדע לערוך מרצועת אם, אם טיפול ניווט ננקטת זאת. של החלל התפתחות שער. סדר המשפט ליצירתה לויקיפדים בה, היא הבאים בעברית לעריכה מה. דת החלל מרצועת העריכהגירסאות תנך, הראשי משפטית האנציקלופדיה בדף ב, דת סדר כימיה צילום ספינות.</p>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isEnglish: true
    }
  },
  methods: {
    toggleEnglish() { this.isEnglish = true; },
    toggleHebrew() { this.isEnglish = false; }
  }
}
</script>

<style scoped>
    .animated { animation-duration: .3s; }
    .container-fluid {
        margin-top: 3rem;
        padding: 8rem 0;
        min-height: 1000px;
        background-color: #f7f7f7;
    }
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .herzel {
        width: 10%;
        margin-bottom: 2rem;
    }
    .heb { direction: rtl; text-align: right; }
    .heb h5 { font-size: 1.2rem; }
    .heb h6 { font-size: 1rem; }
    .heb p { font-size: .8rem; }
    h2 {font-weight: bold; margin-bottom: 4rem; text-align: center;}
    .row.flags {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-bottom: 3rem;
    }
    .flag-icon {
        padding: 0 .5rem;
        flex-basis: 7%;
        cursor: pointer;
    }
    .flag-icon img { width: 100%; }

    @media screen and (max-width: 1440px) and (min-width: 1201px) {
        .container {width: 75%;}
    }

    @media screen and (max-width: 1200px) {

    }

    @media screen and (max-width: 767px) {
        .herzel {width: 20%;}
        .flags { margin-bottom: 1rem; }
        .flag-icon { flex-basis: 15%; }
    }

    @media screen and (max-width: 380px) {

    }
</style>