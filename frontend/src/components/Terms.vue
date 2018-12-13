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
                <!--english section-->
                <div :key="1" v-if="isEnglish" class="row">
                    <div class="col-lg-12">
                        <h4>HackIDC 2019 - Contestants Agreement</h4>
                        <h5>Introduction</h5>
                        <ol>
                            <li>The Efi Arazi School of Computer Sciences at IDC Herzliya, together with the IDC Student Council (“the School” and “Council”, respectively and, jointly: “Competition Sponsors”) are conducting a prize bearing competition among students from Israel, as defined below, for the development of an original software product relating to entrepreneurship in any field whatsoever (hereinafter: “the Product”).  The competition will be conducted as a 36-hour marathon (hereinafter: “the Competition”).</li>
                            <li>These guidelines reflect an agreement between the Competition contestants, as defined below, and the Competition Sponsors, and anyone registering to participate in the Competition under these rules and as specified below, shall be considered to have accepted and consented to the verbatim terms of these rules.</li>
                            <li>The rules are posted on the Competition website at www.hackidc.com (hereinafter: “the Competition Website”).</li>
                        </ol>
                        <h5>Terms of Participation and Registration</h5>
                        <ol start="4">
                            <li>Contestants eligible to register to the Competition are students attending an accredited academic institution in Israel during the 5778 (2018) academic year, who enrolled in the Competition on the Competition Website and who confirmed reading these rules in the relevant field.  As part of the registration process, registrants will be required to present a valid enrollment certificate from their academic institution relating to the current academic year, as well as their CV (hereinafter: “Registrant” and, respectively: “Registrants”) prior to the Competition.  In order to remove all doubt, registration is personal.</li>
                            <li>Registration to the Competition does not confirm or guarantee participation in the Competition, but comprises a prerequisite for participation.</li>
                            <li>Registration will begin on 16 December 2018 and will end on 8 March 2019 (hereinafter: “Registration Period”).</li>
                            <li>Competition Sponsors may extend the Competition Registration Period upon their sole discretion (hereinafter: “the Extension Period”), publishing the extension on the Competition Website and Facebook Page.</li>
                            <li>Registrants shall be considered to have agreed to the disclosure of their CV and/or any personal details to the Competition Sponsors and/or anyone on their behalf, including Competition judges and mentors and/or HR departments at companies sponsoring the Competition, and anyone who agreed to such companies contacting them with employment and/or other offers.</li>
                            <li>Registrants shall be considered to have agreed that any photo or clip containing their image and voice, which may be shot and/or recorded during the Competition, and/or that their names and other personal details submitted upon registration, shall be published by the Competition Sponsors, fully or partially, with/without noting their names, on any media outlet and/or other advertising method, including (but not limited to) the Competition Website and/or Facebook Page and/or the School Facebook Page and/or Council publication upon the discretion of the Competition Sponsors, all without derogating from their consent to all other terms of these rules.  It is hereby clarified that this condition comprises a prerequisite unrelated to participation in the Competition and Registrants who sent their personal details for participation in the Competition herein shall be considered to have accepted this condition in advance.</li>
                            <li>Participation may be individual or in teams of up to five Registrants, as set forth below.</li>
                            <li>At the end of the Registration Period (including the Extension Period), representatives for the Competition Sponsors will review Registrant details, including information relating to Registrant experience in the relevant fields.  Competition Sponsors may (but are not obligated to) initiate an interview and/or direct questions to the Registrants (including specific Registrants) prior to approving their participation in the Competition, all upon their sole discretion (hereinafter: “the Sorting Process”).</li>
                            <li>At the end of the Sorting Process, each of the Registrants shall be issued personal notice, stating whether or not the Competition Sponsors approved their participation.  Notice of approval will be submitted by phone and/or e-mail (hereinafter: “Confirmation Notice”).  Registrants shall be considered to have registered to the Competition where they received a Confirmation Notice from the Competition Sponsors and provided they confirmed their participation by return e-mail (hereinafter: “Participating Registrant” and, respectively, “Participating Registrants”).</li>
                            <li>Participating Registrants declare and undertake that the codes and any information and/or other content used to develop the Product under the Competition are original and that they were written and/or created by the Participating Registrants and/or their teams during the Competition.</li>
                            <li>Participating Registrants declare and undertake that the Product to be developed, themselves or together with other Participating Registrants, is an original Product, including in terms of the concept underlying the Product and expression of the concept in code.</li>
                            <li>Participating Registrants declare and undertake that they will not use any code and/or software and/or application for the Competition, which violates any third party rights (including as related to use of open source code subject to third party licenses, which the Participating Registrants undertake to fully comply with) and they undertake to remunerate the Competition Sponsors for any claim and/or demand and/or suit directed against them regarding the violation of third party rights, immediately upon first demand.</li>
                            <li>Participating Registrants may not use code that was written and/or prepared prior to the beginning of the Competition.  Participating Registrants may work with codes written only during the Competition.  Participating Registrants who at any point of the Competition, are found using code written prior to the Competition, shall be immediately disqualified along with their entire team and will be required to leave the Competition venue immediately.</li>
                            <li>All Participating Registrants (and, respectively, Participating Teams) shall own the creators’ rights to the Product and/or concept thereby developed and/or produced during the Competition.  Participating Registrants shall be considered to have agreed that where they participate in a team of several Participating Registrants (hereinafter: “Team”), the creators’ rights to the Product shall be jointly owned by all members of the Team, regardless of their contribution to writing the code and/or creating the Product.</li>
                            <li>Competition Sponsors may disqualify and/or remove Participants and Teams from the Competition at any stage if they failed to fully meet the terms set forth herein on time and/or where, upon Competition Sponsor discretion, a Registrant or Participant or Participating Registrants and/or Participating Teams committed an act that is unworthy, unethical, illegal or otherwise violating the spirit of the Competition and/or where they failed to uphold and/or impaired the rights of any other Participating Registrants.  In order to remove all doubt, Competition Sponsors may retroactively revoke an award from Participating Registrants and/or a Team.</li>
                        </ol>
                        <h5>The Competition</h5>
                        <ol start="19">
                            <li>The Competition will take place between 11-12 April 2019 at the IDC Campus in Herzliya.</li>
                            <li>Competition Sponsors may change the Competition dates and times upon their sole discretion.</li>
                            <li>The agenda for each of the Competition days will appear on the Competition Website.  The final Competition agenda will be presented to the Participating Registrants at the Competition opening.</li>
                            <li>Two judging teams shall operate during the Competition: secondary and main.  The secondary judging panel will select several Participating Registrants/Teams of all Participating Registrants for the finals.  The main judging panel will select the winning Participating Registrants/Teams of those who reached the finals (in order to remove all doubt, the number of finalists/winners is subject to Contest Sponsor discretion).</li>
                            <li>Contest Sponsors may alter the judging panel upon their exclusive discretion and based on constraints that apply, if any.</li>
                            <li>Judges may promote to the finals and/or grant victory of the Competition to a Participating Registrant or Team, and may determine a joint winning.</li>
                            <li>The judging panels may issue Participating Registrants and/or Teams additional awards that are not considered among the winning spots, upon their discretion and general impression with the said Participating Registrants and/or Teams, their performance during the Competition  and the Product that they developed.</li>
                            <li>Winners shall be those Participating Registrants and/or Teams determined by the judging panel to have developed a Product that optimally meets the criteria of creativity and innovation during the Competition.</li>
                        </ol>
                        <h5>Competition Process</h5>
                        <ol start="27">
                            <li>The Competition will take place as follows:
                                <ol>
                                    <li>The Participants will convene for registration when the Competition commences.</li>
                                    <li>When registration ends, the Competition will be officially opened, whereby all Participating Registrants will undergo a debriefing for all Participating Registrants regarding the rules of the Competition and its schedule.</li>
                                    <li>The Competition will be commence after the opening ceremony.</li>
                                    <li>Once the Competition is opened, Participating Registrants may begin working on their ideas.</li>
                                    <li>During the Competition, Participating Registrants may consult with professionals on site on behalf of the Competition Sponsors.  Participants may not consult with external consultants who are not there on behalf of the Competition Sponsors.</li>
                                    <li>Competition Sponsors will declare the time at which the work must be completed (“Work Stop”).</li>
                                    <li>Once Work Stop is declared, Participants will not be allowed to continue to work on the Product, but rather on preparations for its presentation.</li>
                                    <li>Following the initial presentation round before the secondary judging panel, Participating Registrants/Teams will be selected to present their Product to the main judging team.</li>
                                    <li>At the closing ceremony, selected Participating Registrants/Teams will present their Product to the main judging panel and to all other Participating Registrants.</li>
                                    <li>The main judging panel will consult after the presentation and declare the Competition winners.</li>
                                </ol>
                            </li>
                            <li>The Competition shall be subject to the schedule presented to the Participants upon opening the Competition.  Competition Sponsors reserve the right to amend the Competition schedule upon their sole discretion.</li>
                        </ol>
                        <h5>Publishing Competition Results, Awards and Exercising the Winning</h5>
                        <ol start="29">
                            <li>Winners will be declared at the Competition closing ceremony on 12 April 2019.</li>
                            <li>All Participating Registrants who sent the e-mail for enrolling in the Competition as set forth above and below, acknowledge that they have read these rules and they explicitly agree that upon receiving the award, if they receive it, the Competition Sponsors and/or anyone on their behalf will photograph them and their pictures of the winning will be published on all media outlets, at any time and place, upon Competition Sponsor sole discretion, including the Competition and/or Council and/or IDC Herzliya and/or School Facebook Page and/or Website.</li>
                            <li>The awards will be determined after completing the registration process upon Competition Sponsor discretion.  Additional prizes may be awarded to Participating Registrants who are not among the winners.</li>
                            <li>Where the winner is a team, the award will be equally divided among the Participating Registrants of the Team.</li>
                            <li>The awards shall be issued to the Participating Registrants in person, as a check made out to their name, within 30 days of the winning notice, at a time coordinated by phone with the Competition Sponsors and subject to presenting identification when the award is granted.</li>
                            <li>The award is personal and non-transferable.</li>
                            <li>Competition Sponsors reserve the right to withhold and/or cancel the award for any reason by which the award may be withheld or cancelled by law.</li>
                        </ol>
                        <h5>General</h5>
                        <ol start="36">
                            <li>Competition results are final, absolute and are not subject to appeal.</li>
                            <li>Competition Sponsors may postpone and/or extend any date appearing in these rules.  In addition, Competition Sponsors may terminate and/or discontinue the Competition at any time due to a fault and/or error and/or factors unrelated thereto, precluding the Competition and/or part thereof, as set forth in these rules or which require postponement.</li>
                            <li>Competition Sponsors shall in no way be liable for any error or fault by which a Registrant’s application was not entered and/or participation is prevented and/or the award cannot be granted.</li>
                            <li>Competition Sponsors may amend these rules at any time by publication on the Competition Website.  All Participating Registrants must follow Website publications on their own.  No individual notices shall be sent regarding changes.</li>
                            <li>The use of masculine form is intended for convenience only and, of course, these rules relate to women and men alike.</li>
                        </ol>
                    </div>
                </div>

                <!--hebrew section-->
                <div :key="2" v-else class="row heb">
                    <div class="col-lg-12">
                        <h4>HackIDC 2019 - הסכם משתתפים</h4>
                        <h5>מבוא</h5>
                        <ol>
                            <li>בית ספר אפי ארזי למדעי המחשב – המרכז הבינתחומי הרצליה בשיתוף עם אגודת הסטודנטים – המרכז הבינתחומי (להלן בהתאמה: "בית הספר", "האגודה" וביחד: "עורכות התחרות") עורכות תחרות נושאת פרסים בין סטודנטים מישראל, כהגדרתם להלן אשר עניינה פיתוח מוצר תוכנה מקורי הקשור ליזמות בכל תחום שהוא (להלן: "המוצר"), במסגרת מרתון אשר יימשך עד 36 שעות (להלן: "התחרות").</li>
                            <li>תקנון זה מהווה הסכם בין המשתתפים בתחרות, כהגדרתם להלן, לבין עורכות התחרות, וכל משתתף אשר נרשם לתחרות בהתאם לתקנון זה וכפי שיפורט להלן, יראוהו כמי שקיבל על עצמו את תנאי תקנון זה ככתבתם וכלשונם והביע את הסכמתו להם.</li>
                            <li>תקנון זה מתפרסם באתר האינטרנט של התחרות בכתובת www.hackidc.com (להלן: "אתר התחרות").</li>
                        </ol>
                        <h5>תנאי ההשתתפות בתחרות ואופן ההרשמה</h5>
                        <ol start="4">
                            <li>נרשם חוקי לתחרות הינו סטודנט, הלומד במוסד אקדמאי מוכר בישראל לשנת הלימודים תשע"ח, אשר נרשם לתחרות באתר התחרות ואישר במקום המתאים בדף ההרשמה באתר התחרות, כי קרא תקנון זה. במסגרת ההרשמה יידרש כל נרשם  טרם תחילת התחרות להציג אישור לימודים עדכני מהמוסד האקדמי בו הוא לומד עבור שנת הלימודים הנוכחית וקורות חיים (להלן: "נרשם" ובהתאמה: "נרשמים"). למען הסר ספק, הרישום הוא על בסיס אישי.</li>
                            <li>ההרשמה לתחרות אינה מהווה אישור או הבטחה להשתתפות בתחרות, אך מהווה תנאי להשתתפות בתחרות.</li>
                            <li> ההרשמה לתחרות תחל בתאריך 16.12.18 ותינעל בתאריך 08.03.19 (להלן: "תקופת ההרשמה").</li>
                            <li>עורכות התחרות רשאיות להאריך את תקופת ההרשמה לתחרות על פי שיקול דעתן הבלעדי (להלן: "התקופה המוארכת") בדרך של פרסום באתר התחרות ובעמוד הפייסבוק של התחרות.</li>
                            <li>נרשם לתחרות ייחשב כמי שהסכים כי קורות החיים שלו ו/או כל פרט מפרטיו האישיים כפי שמסר אותם לעורכות התחרות יועברו אל עורכות התחרות ו/או למי מטעמן, לרבות שופטי התחרות והמנטורים ו/או למחלקות משאבי אנוש בחברות אשר מעניקות את החסות לתחרות וכן כמי שהסכים כי חברות כאמור יפנו אליו בהצעות תעסוקה ו/או אחרות.</li>
                            <li>נרשם לתחרות ייחשב כמי שהסכים כי כל תצלום או סרטון הכולל את דמותו וקולו, כפי שעשויים להיות מצולמים ו/או מוקלטים במהלך התחרות, ו/או שמו ופרטים אישיים אחרים שסופקו בהרשמה לתחרות, יתפרסמו על ידי עורכות התחרות בחלקם או במלואם, עם/מבלי לציין את שמו, בכל כלי תקשורת ו/או בכל אמצעי פרסום אחר, לרבות (אך לא רק) אתר התחרות ו/או עמוד הפייסבוק של התחרות ו/או עמוד הפייסבוק של בית הספר ו/או כל פרסום של האגודה בהתאם לשיקול דעת עורכות התחרות, וזאת מבלי לגרוע מהסכמתו לכל יתר תנאי תקנון זה. מובהר כי תנאי זה מהווה תנאי מקדים שאין בלתו לעצם ההשתתפות בתחרות, ונרשם אשר שלח פרטיו האישיים לצורך השתתפות בתחרות נשוא תקנון זה, יראוהו כמי שקיבל על עצמו מראש תנאי זה.</li>
                            <li>ההשתתפות בתחרות יכול שתעשה על בסיס אישי או בצוותים הכוללים עד חמישה נרשמים, כפי שיפורט להלן.</li>
                            <li>בתום תקופת ההרשמה (לרבות התקופה המוארכת), יבחנו נציגים מטעם עורכות התחרות את פרטי הנרשמים, לרבות הפרטים על ניסיון הנרשמים בתחומים הרלוונטיים. עורכות התחרות רשאיות (אך לא חייבות) לזמן לראיון ו/או להפנות שאלות לנרשמים (לרבות נרשמים ספציפיים) בטרם אישור השתתפותם בתחרות, על פי שיקול דעתן הבלעדי (להלן: "תהליך המיון").</li>
                            <li>בתום תהליך המיון, תימסר לכל אחד מהנרשמים הודעה אישית, אשר יצויין בה אם עורכות התחרות אישרו את השתתפותו בתחרות או לא. הודעה על אישור השתתפות תימסר באמצעות הטלפון ו/או המייל (להלן: "הודעה מאשרת"). משתתף ייחשב מי שנרשם לתחרות, קיבל הודעה מאשרת מעורכות התחרות ואישר במייל חוזר את השתתפותו בתחרות (להלן: "נרשם משתתף",  ובהתאמה:  "נרשמים משתתפים").</li>
                            <li>הנרשם המשתתף מצהיר ומתחייב כי הקוד וכן כל מידע ו/או תוכן אחר אשר יעשה בהם שימוש לפיתוח המוצר במסגרת התחרות הינם מקוריים וכי הם נכתבו ו/או נוצרו במהלך התחרות על ידי הנרשם המשתתף ו/או הצוות שלו.</li>
                            <li>הנרשם המשתתף מצהיר ומתחייב כי המוצר, אשר יפתח בעצמו או ביחד עם נרשמים משתתפים אחרים הינו מוצר מקורי, לרבות מבחינת הרעיון שעומד מאחורי המוצר והביטוי של הרעיון בקוד.</li>
                            <li>הנרשם המשתתף מצהיר ומתחייב כי לא יעשה כל שימוש במסגרת השתתפותו בתחרות בקוד ו/או תוכנה ו/או יישום, באופן אשר מפר זכויות של צד שלישי (לרבות בכל הנוגע לשימוש בקוד פתוח הכפוף לרישיונות צד שלישי אותם מתחייב הנרשם המשתתף לכבד במלואם) ומתחייב לשפות את עורכות התחרות בגין כל טענה ו/או דרישה ו/או תביעה אשר תופנה כלפיהן בקשר עם הפרת זכויות צד שלישי מיד עם דרישתן הראשונה.</li>
                            <li>נרשמים משתתפים בתחרות לא יורשו להשתמש בקוד מוכן, אשר נכתב ו/או נערך במועד מוקדם למועד תחילת התחרות. נרשמים משתתפים יוכלו לעבוד עם קוד אשר נכתב במהלך התחרות בלבד. נרשם משתתף אשר ימצא, בשלב כלשהו של התחרות, משתמש בקוד אשר נכתב לפני התחרות יפסל מידית ביחד עם כל הצוות שלו ויהיה חייב לעזוב את מקום התחרות לאלתר.</li>
                            <li>כל נרשם משתתף  בתחרות (ובהתאמה צוות משתתף בתחרות) יהיה בעל זכויות היוצרים במוצר ו/או ברעיון אשר יפותח ו/או ייוצר על ידו במהלך התחרות. נרשם לתחרות ייחשב כמי שהסכים, כי ככל שהשתתפותו בתחרות תיעשה בצוות של מספר נרשמים משתתפים (להלן: "צוות") יהיו זכויות היוצרים במוצר בבעלות משותפת של כל חברי הצוות ללא קשר למידת תרומתם לכתיבת הקוד ו/או יצירת המוצר.</li>
                            <li>עורכות התחרות רשאיות לפסול ו/או להוציא משתתפים או צוותים מהתחרות בכל שלב במידה ולא מילאו אחר כלל התנאים המפורטים בתקנון זה במלואם ובמועדם ו/או במידה ועל פי שיקול דעתן המלא של עורכות התחרות נרשם או משתתף או נרשמים משתתפים ו/או צוותים משתתפים ביצעו מעשה אחר אשר אינו ראוי, אינו אתי, אינו חוקי או סותר בכל דרך אחרת את רוח התחרות ו/או לא כיבדו ו/או פגעו בזכויות של כל נרשם משתתף אחר. למען הסר ספק,  עורכות התחרות יהיו רשאיות לשלול זכייה מנרשם משתתף ו/או מצוות באופן רטרואקטיבי. החלטתן של עורכות התחרות תהיה סופית, מוחלטת ובלתי ניתנת לערעור.</li>
                        </ol>
                        <h5>התחרות</h5>
                        <ol start="19">
                            <li>התחרות תיערך בין התאריכים 11.04.19 עד 12.04.19 בקמפוס המרכז הבינתחומי הרצליה.</li>
                            <li>עורכות התחרות רשאיות לשנות את שעות וימי התחרות על פי שיקול דעתן הבלעדי.</li>
                            <li>סדר היום לכל אחד מימי התחרות יפורסם באתר התחרות. לוח הזמנים הסופי של התחרות יימסר לנרשמים המשתתפים במועד פתיחת התחרות.</li>
                            <li>במהלך התחרות יפעלו שני צוותי שיפוט: משני וראשי. צוות השופטים המשני יבחר מספר נרשמים משתתפים/צוותים מבין כלל הנרשמים המשתתפים אשר יעלו לגמר. צוות השופטים הראשי יבחר מבין הנרשמים המשתתפים/צוותים אשר עלו לגמר, את הנרשמים המשתתפים/הצוותים הזוכים בתחרות (למען הסר ספק, מספר העולים לגמר/הזוכים נתון לשיקול דעת עורכות התחרות).</li>
                            <li>עורכות התחרות רשאיות לערוך שינויים בצוות השופטים על פי שיקול דעתן הבלעדי ובהתאם לאילוצים אשר יתהוו, ככל שיתהוו.</li>
                            <li>השופטים רשאים להעלות לגמר ו/או להעניק את הזכייה בתחרות לנרשם משתתף או לצוות, וכן רשאים לקבוע זכיה משותפת.</li>
                            <li>צוותי השופטים רשאים להעניק פרסים נוספים גם לנרשמים משתתפים ו/או צוותים, אשר אינם נמנים על אחד מהמקומות הזוכים, על פי שיקול דעתם והתרשמותם הכללית של השופטים מאותם נרשמים משתתפים ו/או צוותים, אופן תפקודם במהלך התחרות והמוצר אשר פיתחו.</li>
                            <li>הזוכים בתחרות יהיו הנרשמים המשתתפים ו/או צוותים אשר צוות השופטים מצא כי המוצר אשר פיתחו במסגרת התחרות עונה באופן אופטימלי לקריטריונים של יצירתיות וחדשנות.</li>
                        </ol>
                        <h5>אופן עריכת התחרות</h5>
                        <ol start="27">
                            <li>מהלך התחרות יהיה כדלקמן:
                                <ol>
                                    <li>במועד פתיחת התחרות יתכנסו המשתתפים לצורך רישום.</li>
                                    <li>בתום הרישום תיערך פתיחה רשמית של התחרות במסגרתה יועבר תדרוך מרוכז לכל הנרשמים המשתתפים בקשר עם כללי התחרות ולוח הזמנים.</li>
                                    <li>לאחר טקס פתיחה תוכרז תחילת התחרות.</li>
                                    <li>מרגע ההכרזה על תחילת התחרות יוכלו הנרשמים המשתתפים להתחיל לעבוד על הרעיון שלהם.</li>
                                    <li>במהלך התחרות יוכלו הנרשמים המשתתפים להיוועץ עם אנשי מקצוע אשר ימצאו במקום מטעם עורכות התחרות. אין להיעזר ביועצים חיצוניים אשר אינם במקום מטעם עורכות התחרות.</li>
                                    <li>עורכות התחרות יכריזו על המועד בו יש לסיים את העבודה ("תום העבודה").</li>
                                    <li>מרגע ההכרזה על תום העבודה לא יורשו המתמודדים להמשיך לעבוד על המוצר אלא רק על הכנות להצגתו.</li>
                                    <li>לאחר סבב הצגה ראשוני, בפני צוות שופטים משני, ייבחרו נרשמים משתתפים/צוותים להציג את המוצר שלהם בפני צוות השופטים הראשי.</li>
                                    <li>במהלך טקס הסיום יציגו הנרשמים המשתתפים/הצוותים הנבחרים את המוצר בפני צוות השופטים הראשי ובפני שאר הנרשמים המשתתפים.</li>
                                    <li>בתום ההצגה, יקיים צוות השופטים התייעצות, בתומה יוכרזו המנצחים בתחרות.</li>
                                </ol>
                            </li>
                            <li>התחרות תתנהל בכפוף ללוח הזמנים אשר יוצג למשתתפים במועד פתיחת התחרות. עורכות התחרות שומרות לעצמן את הזכות לערוך שינויים בלוחות הזמנים של התחרות על פי שיקול דעתן הבלעדי.</li>
                        </ol>
                        <h5>פרסום תוצאות התחרות, הפרסים ואופן מימוש הזכייה</h5>
                        <ol start="29">
                            <li>הזוכים בתחרות יוכרזו בטקס סיום התחרות ביום 12-04-19.</li>
                            <li>כל נרשם משתתף אשר שלח את הודעת הדוא"ל לצורך ההרשמה לתחרות כאמור בתקנון זה לעיל ולהלן, מקבל על עצמו כי קרא תנאי תקנון זה ומסכים במפורש לכך שבעת קבלת הפרס, ככל שיזכה בכזה, הוא יצולם על ידי עורכות התחרות ו/או מי מטעמן ותמונתו ממעמד הזכייה תפורסם בכל אמצעי מדיה, בכל מקום וזמן, לפי שיקול דעתן הבלעדי של עורכות התחרות, ולרבות עמוד הפייסבוק ו/או אתר האינטרנט של התחרות ו/או האגודה ו/או המרכז הבינתחומי הרצליה ו/או בית הספר.</li>
                            <li>סכומי הפרסים לזוכים ייקבעו לאחר סיום שלב ההרשמה על פי שיקול דעת עורכות התחרות. תיתכן חלוקת פרסים נוספים לנרשמים משתתפים אשר אינם נמנים על אחד מהמקומות הזוכים.</li>
                            <li>במידה והזוכה הינו צוות, יחולק סכום הזכייה באופן שווה בין הנרשמים המשתתפים הנמנים על הצוות.</li>
                            <li>הפרסים ימסרו לנרשמים המשתתפים במסירה אישית, בהמחאה על שמם, בתוך 30 ימים ממועד הודעת הזכייה, בהתאם למועד אשר יתואם עמם מראש טלפונית על ידי עורכות התחרות, ובכפוף להצגת תעודה מזהה במועד המסירה.</li>
                            <li>הפרס הינו אישי ואינו ניתן להעברה.</li>
                            <li>עורכות התחרות שומרות לעצמן את הזכות לעכב ו/או לבטל את מסירת הפרס, מכל סיבה אשר יש בה עפ"י דין לעכב או לבטל את מסירתו.</li>
                        </ol>
                        <h5>כללי</h5>
                        <ol start="36">
                            <li>תוצאות התחרות הן סופיות, מוחלטות ובלתי ניתנות לערעור.</li>
                            <li>עורכות התחרות רשאיות לדחות ו/או להאריך כל מועד הקבוע בתקנון זה. בנוסף עורכות התחרות רשאיות לבטל או להפסיק תחרות זו, בכל עת, מחמת תקלה ו/או טעות ו/או מחמת גורמים שאינם תלויים בהן, אשר לא יאפשרו את קיום התחרות, ו/או את חלקה, בהתאם לאמור בתקנון זה, או יחייבו את דחייתה.</li>
                            <li>עורכות התחרות לא יהיו אחראיות באופן כלשהו לכל טעות או תקלה בגינה לא נקלטה בקשת נרשם להירשם לתחרות ו/או תימנע ההשתתפות ממי שזכאי להשתתף בתחרות ו/או בגינה תמנע ממנו האפשרות לקבל את הפרס.</li>
                            <li>עורכות התחרות רשאיות לתקן תקנון זה, בכל עת על ידי פרסום הודעה באתר התחרות. על כל נרשם משתתף לעקוב בעצמו אחרי הפרסומים באתר. לא יישלחו הודעות אישיות על שינויים.</li>
                            <li>הניסוח בלשון זכר הינו מטעמי נוחות בלבד והוא מתייחס כמובן לנשים וגברים.</li>
                        </ol>
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
    h2 {font-weight: bold; margin-bottom: 4rem; text-align: center;}
    h5, h6 { font-weight: bold; }
    h4 { font-size: 1.3rem; margin-bottom: 2rem; text-align: center; font-weight: bold; }
    ol li { padding-left: 1rem; margin-top: .5rem; font-size: .9rem; }
    .heb { direction: rtl; text-align: right; }
    .heb h5 { font-size: 1.1rem; }
    .heb h6 { font-size: 1rem;  }
    .heb ol li { padding-right: 1rem; margin-top: .5rem; font-size: .9rem; }
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
        .col-lg-12 { padding-left: 25px; padding-right: 25px; }
        .herzel {width: 20%;}
        .flags { margin-bottom: 1rem; }
        .flag-icon { flex-basis: 15%; }
        ol { padding: 0 1.5rem; }
        ol li ol { padding: .5rem; }
        .heb ol { padding: 0 1rem 0 .5rem; }
    }

    @media screen and (max-width: 380px) {
        h2 { font-size: 1.7rem; }
        h4 { font-size: 1.1rem; }
        h5, h6 { font-size: 1rem; }
        .heb h4 { font-size: 1.1rem; }
        .heb h5 { font-size: 1rem; }
        .heb ol li { font-size: .8rem; }
        ol { padding: 0 1rem; }
        .heb ol { padding: 0 1rem 0 .5rem; }
    }
</style>