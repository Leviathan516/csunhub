// clubs.js

// ====== 1. Data: edit these objects as you like ======

const clubs = [
    {
        id: "3-wins-fitness-club-csun",
        name: "3 Wins Fitness Club, CSUN",
        shortName: "3 Wins Fitness Club, CSUN",
        category: "Engineering and Technology",
        image: "media/images/clubs/3-wins-fitness-club-csun.jpg",
        description:
            "We are dedicated to empowering individuals to improve their quality of life by building healthier bodies, minds, and communities.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "aapi-social-work-collective",
        name: "AAPI Social Work Collective",
        shortName: "AAPI Social Work Collective",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/aapi-social-work-collective.jpg",
        description:
            "AAPI SWC was formed to address the lack of space, resources, and support for AAPI Social workers and their clients. We seek to make space for AAPI social workers and allies to empower themselves, promote and educate about the AAPI experience.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "acasola",
        name: "Acasola",
        shortName: "Acasola",
        category: "Arts and Media",
        image: "media/images/clubs/acasola.jpg",
        description:
            "Acasola is California State University, Northridge\u2019s premiere A Cappella group. We are a diverse group of students who aim to deliver a unique musical experience to the CSUN community through the art of A Cappella music.",
        email: "",
        discord: "",
        socials: {
            instagram: "https://instagram.com/csunacasola"
        }
    },
    {
        id: "alfa-animation-community",
        name: "Alfa Animation Community",
        shortName: "Alfa Animation Community",
        category: "Arts and Media",
        image: "media/images/clubs/alfa-animation-community.jpg",
        description:
            "A place where students of all backgrounds can feel welcome and valued while creating and sharing comics, films and animations.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "alliance-for-women-in-entertainment",
        name: "Alliance for Women in Entertainment",
        shortName: "Alliance for Women in Entertainment",
        category: "Arts and Media",
        image: "media/images/clubs/alliance-for-women-in-entertainment.jpg",
        description:
            "The CSUN Alliance for Women in Entertainment (AWE) is a student lead organization at CSUN specializing in supporting women and gender non-conforming people to be successful in the entertainment industry.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "alpha-epsilon-omega-fraternity",
        name: "Alpha Epsilon Omega Fraternity",
        shortName: "Alpha Epsilon Omega Fraternity",
        category: "Fraternity and Sorority Life",
        image: "media/images/clubs/alpha-epsilon-omega-fraternity.jpg",
        description:
            "Social and Cultural Fraternity who welcomes all to become part of a lifetime Brotherhood.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "alpha-epsilon-pi",
        name: "Alpha Epsilon Pi",
        shortName: "Alpha Epsilon Pi",
        category: "Fraternity and Sorority Life",
        image: "media/images/clubs/alpha-epsilon-pi.jpg",
        description:
            "Alpha Epsilon Pi is THE Premiere Jewish Fraternity on the California State University Northridge campus. We offer THE best college experience for all CSUN students and create memorable friendships for a lifetime",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "alpha-kappa-alpha-sorority-inc",
        name: "Alpha Kappa Alpha Sorority, Inc.",
        shortName: "Alpha Kappa Alpha Sorority, Inc.",
        category: "Fraternity and Sorority Life",
        image: "media/images/clubs/alpha-kappa-alpha-sorority-inc.jpg",
        description:
            "",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "alpha-lambda-delta",
        name: "Alpha Lambda Delta",
        shortName: "Alpha Lambda Delta",
        category: "Honor Society",
        image: "media/images/clubs/alpha-lambda-delta.jpg",
        description:
            "Alpha Lambda Delta is one of the prestigious national honor society that recognizes academic excellence in the first year of college. ALD helps students to improve their resumes and provides financial support and opportunity to meet outstanding students.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "alpha-phi",
        name: "Alpha Phi",
        shortName: "Alpha Phi",
        category: "Academic and Professional",
        image: "media/images/clubs/alpha-phi.jpg",
        description:
            "As Alpha Phis, we pride ourselves on our commitment to leadership and philanthropy, our celebration of scholarship, and friendships that will last a lifetime. The Epsilon Upsilon chapter is forever grateful for Alpha Phi and giving us that home away fr...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "alpha-pi-sigma-sorority-incorporated",
        name: "Alpha Pi Sigma Sorority, Incorporated.",
        shortName: "Alpha Pi Sigma Sorority, Incorporated.",
        category: "Fraternity and Sorority Life",
        image: "media/images/clubs/alpha-pi-sigma-sorority-incorporated.jpg",
        description:
            "Alpha Pi Sigma Sorority, Incorporated was established at California State University Northridge on March 29, 2008. Alpha Pi Sigma's mission to professionally develop women leaders has created an innovative forum for women to give back to the community.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "alpha-sigma-theta-sorority",
        name: "Alpha Sigma Theta Sorority",
        shortName: "Alpha Sigma Theta Sorority",
        category: "Fraternity and Sorority Life",
        image: "media/images/clubs/alpha-sigma-theta-sorority.jpg",
        description:
            "Alpha Sigma Theta was founded in 1987 here at California State University, Northridge. We are a group of Deaf, Hard-of-Hearing, and Hearing women who carry strong ties to the Deaf community Deaf culture. We are the only sorority on campus that uses ASL.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "alpha-xi-delta",
        name: "Alpha Xi Delta",
        shortName: "Alpha Xi Delta",
        category: "Academic and Professional",
        image: "media/images/clubs/alpha-xi-delta.jpg",
        description:
            "We strive to inspire women to realize their potential through courage, graciousness, and peace.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "american-advertising-federation-csun",
        name: "American Advertising Federation CSUN",
        shortName: "AAF CSUN",
        category: "Business and Professional",
        image: "media/images/clubs/american-advertising-federation-csun.jpg",
        description:
            "AAF CSUN is dedicated to empowering students who are passionate about advertising, marketing, and media. Our chapter provides opportunities to learn, network with industry professionals, and showcase creativity through workshops and competitions.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "american-indian-student-association",
        name: "American Indian Student Association",
        shortName: "American Indian Student Association",
        category: "Cultural and Identity",
        image: "media/images/clubs/american-indian-student-association.jpg",
        description:
            "We are an indigenous organization dedicated to creating and holding space for indigenous individuals through positive empowerment on and off campus.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "american-marketing-association",
        name: "American Marketing Association",
        shortName: "AMA",
        category: "Business and Professional",
        image: "media/images/clubs/american-marketing-association.jpg",
        description:
            "The California State University, Northridge American Marketing Association (AMA) is a collegiate chapter of the national organization that is dedicated to educating students about the marketing industry, while connecting students with various companies.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "american-medical-women-s-association",
        name: "American Medical Women's Association",
        shortName: "AMWA",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/american-medical-women-s-association.jpg",
        description:
            "The American Medical Women\u2019s Association is an organization that functions at the local, national, and international level to advance women in medicine and other pre-health-related fields.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "american-society-of-civil-engineers",
        name: "American Society of Civil Engineers",
        shortName: "ASCE",
        category: "Engineering and Technology",
        image: "media/images/clubs/asce.jpg",
        description:
            "The American Society of Civil Engineers student chapter at California State University, Northridge is a student chapter that exposes the members to various networking, volunteering, internship and scholarship opportunities. Active members are also invo...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "american-society-of-mechanical-engineers",
        name: "American Society of Mechanical Engineers",
        shortName: "ASME",
        category: "Engineering and Technology",
        image: "media/images/clubs/asme.jpg",
        description:
            "We are the student chapter of the ASME organization here at CSUN. The goal of ASME CSUN is to promote the enrichment of our student members through our 3 pillars, professional development, design experience, and STEM Outreach.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "animation-students-league-of-northridge",
        name: "Animation Students League of Northridge",
        shortName: "ALN",
        category: "Arts and Media",
        image: "media/images/clubs/animation-students-league-of-northridge.jpg",
        description:
            "The Animation Student League of Northridge invites all who are passionate about art, especially those who are interested in Animation, 3D Modeling/Rigging, Lighting, Visual Development, Character Design, Storyboarding, and Visual Effects.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "anthropology-student-association",
        name: "Anthropology Student Association",
        shortName: "Anthropology Student Association",
        category: "Cultural and Identity",
        image: "media/images/clubs/anthropology-student-association.jpg",
        description:
            "Anthropology Student Association (ASA)",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "armenian-pre-health-society",
        name: "Armenian Pre-Health Society",
        shortName: "Armenian Pre-Health Society",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/armenian-pre-health-society.jpg",
        description:
            "This organization is dedicated toward educating students about different pre-health routes by hosting guest speakers and providing valuable tools and information to guide students through the pre-health process.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "armenian-student-association",
        name: "Armenian Student Association",
        shortName: "Armenian Student Association",
        category: "Cultural and Identity",
        image: "media/images/clubs/armenian-student-association.jpg",
        description:
            "Armenian Student Association is a student-run, award-winning organization at CSUN that serves to present Armenian history and culture to the Armenian and non-Armenian student population.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "art-education-club",
        name: "Art Education Club",
        shortName: "Art Education Club",
        category: "Arts and Media",
        image: "media/images/clubs/art-education-club.jpg",
        description:
            "The mission of the Art Education Club is to build community and support for Art Education preservice students and teachers.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "as-sport-clubs",
        name: "AS Sport Clubs",
        shortName: "AS Sport Clubs",
        category: "Sports and Recreation",
        image: "media/images/clubs/as-sport-clubs.jpg",
        description:
            "The Sport Clubs program provides CSUN students an opportunity to participate in regionally and nationally competitive sports and recreational activities. The program is designed to allow each CSUN student a chance to participate in a sport club individ...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "as-usu-election-candidates",
        name: "AS/USU Election Candidates",
        shortName: "AS/USU Election Candidates",
        category: "Business and Professional",
        image: "media/images/clubs/as-usu-election-candidates.jpg",
        description:
            "This organization is intended for AS/USU candidates to apply to post and distribute marketing campaigns on campus.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "asian-american-studies-pathways-project",
        name: "Asian American Studies Pathways Project",
        shortName: "AASPP",
        category: "Arts and Media",
        image: "media/images/clubs/asian-american-studies-pathways-project.jpg",
        description:
            "The Asian American Studies Pathways Project (AASPP) at CSUN, founded in 2017, is a student initiated organization that supports APIDA students with academic resources and community-building to improve enrollment and retention.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "asian-pacific-islander-desi-american-resource-center",
        name: "Asian, Pacific Islander, Desi American Resource Center",
        shortName: "APIDARC",
        category: "Cultural and Identity",
        image: "media/images/clubs/asian-pacific-islander-desi-american-resource-center.jpg",
        description:
            "The APIDA Resource Center at California State University, Northridge (CSUN) promotes student success through education, community engagement, culturally affirming programs, academic resources, and leadership development that celebrate Asian, Pacific Isla",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "associated-students-judicial-court",
        name: "Associated Students Judicial Court",
        shortName: "Associated Students Judicial Court",
        category: "Campus Resources and Support",
        image: "media/images/clubs/associated-students-judicial-court.jpg",
        description:
            "The purpose of this portal is to transition officers between old and new Judicial Courts, have a channel for communication and be able to create legacy planning for the future.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "associated-students-inc",
        name: "Associated Students, Inc.",
        shortName: "Associated Students, Inc.",
        category: "Service and Advocacy",
        image: "media/images/clubs/associated-students-inc.jpg",
        description:
            "Associated Students (AS) is the primary advocate for students at California State University, Northridge and provides excellent, meaningful programs and services designed to enhance and create a spirited learning-focused campus environment.AS is also t...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "association-of-latino-professionals-for-america",
        name: "Association of Latino Professionals for America",
        shortName: "ALPFA",
        category: "Cultural and Identity",
        image: "media/images/clubs/association-of-latino-professionals-for-america.jpg",
        description:
            "ALPFA is an organization open to all majors and ethnicities. The goal of the organization is to provide opportunities to students to develop their careers and develop a network.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "aztlan-graduation-and-scholarship-committee",
        name: "Aztl\u00e1n Graduation and Scholarship Committee",
        shortName: "ANGSC",
        category: "Arts and Media",
        image: "media/images/clubs/aztlan-graduation-and-scholarship-committee.jpg",
        description:
            "Aztlan Graduation gives you the opportunity to have a more intimate graduation ceremony along with your family/mentors as special guests, and a special day full of entertainments, food and much more. This is a student run organization with the support ...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "ballet-folklorico-aztlan-de-csun",
        name: "Ballet Folkl\u00f3rico Aztl\u00e1n de CSUN",
        shortName: "Ballet Folkl\u00f3rico Aztl\u00e1n de CSUN",
        category: "Arts and Media",
        image: "media/images/clubs/ballet-folklorico-aztlan-de-csun.jpg",
        description:
            "Ballet Folkl\u00f3rico Aztl\u00e1n de CSUN is a Mexican folk dance group at CSUN that focuses on preserving the richness of Mexican culture and Mexica/Chicana/o Folkl\u00f3rico. Everyone is welcome, no experience is needed.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "behavior-ecology-and-evolution-research-club-csun-beer-csun",
        name: "Behavior Ecology and Evolution Research Club, CSUN (BEER, CSUN)",
        shortName: "BEER",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/behavior-ecology-and-evolution-research-club-csun-beer-csun.jpg",
        description:
            "BEER club at CSUN is made up of graduate and undergraduate biology students who are broadly interested in ecology and evolution. We hold weekly meetings to discuss new research, professional development, and the role of science in society.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "beta-alpha-psi",
        name: "Beta Alpha Psi",
        shortName: "Beta Alpha Psi",
        category: "Honor Society",
        image: "media/images/clubs/beta-alpha-psi.jpg",
        description:
            "Beta Alpha Psi is an honors society that focuses on fostering career development, personal and professional growth by exposing our members to various opportunities including networking events, technical and soft skills workshops, and community service.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "beta-gamma-nu-fraternity",
        name: "Beta Gamma Nu Fraternity",
        shortName: "Beta Gamma Nu Fraternity",
        category: "Fraternity and Sorority Life",
        image: "media/images/clubs/beta-gamma-nu-fraternity.jpg",
        description:
            "Beta Gamma Nu is a Greek fraternity that participates in all aspects of college life.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "black-graduation-student-committee",
        name: "Black Graduation Student Committee",
        shortName: "Black Graduation Student Committee",
        category: "Cultural and Identity",
        image: "media/images/clubs/black-graduation-student-committee.jpg",
        description:
            "Black Graduation Student Committee governs and organizes the annual celebration and ceremony the acknowledges all CSUN students of the Diaspora who have accomplished earning a degree in their respective fields.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "black-male-scholars",
        name: "Black Male Scholars",
        shortName: "Black Male Scholars",
        category: "Cultural and Identity",
        image: "media/images/clubs/black-male-scholars.jpg",
        description:
            "The Black Male Scholars program aims to foster student engagement, develop a sense of belonging, and increase matriculation. Through a focus on community building, academic skill development, leadership, and overall well-being.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "black-signers-club",
        name: "Black Signers Club",
        shortName: "Black Signers Club",
        category: "Cultural and Identity",
        image: "media/images/clubs/black-signers-club.jpg",
        description:
            "American Sign Language/Deaf Studies culturally centered space for Black CSUN students and students from the African Diaspora to socialize, support and empower one another by building interpersonal relationships within our own campus community.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "black-student-union",
        name: "Black Student Union",
        shortName: "Black Student Union",
        category: "Cultural and Identity",
        image: "media/images/clubs/black-student-union.jpg",
        description:
            "We are the Black Student Union! We create a safe space for African American students and their allies to be themselves. We build unity and community amongst people of color while also advocating for student rights.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "black-student-athlete-association",
        name: "Black Student-Athlete Association",
        shortName: "Black Student-Athlete Association",
        category: "Cultural and Identity",
        image: "media/images/clubs/black-student-athlete-association.jpg",
        description:
            "The Black Student-Athlete Association is an organization built to supply a safe place for student-athletes to grow, discuss similar unique challenges and promote success to it's members, while representing their culture in a positive way.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "bulls-in-a-barbershop",
        name: "Bulls In A Barbershop",
        shortName: "Bulls In A Barbershop",
        category: "Arts and Media",
        image: "media/images/clubs/bulls-in-a-barbershop.jpg",
        description:
            "A premier male barbershop ensemble dedicated to the art of barbershop harmony. Founded at CSU Northridge, our mission is to inspire and uplift through music, sharing the joy of performance to create a more connected and harmonious world.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "business-analytics-club",
        name: "Business Analytics Club",
        shortName: "Business Analytics Club",
        category: "Engineering and Technology",
        image: "media/images/clubs/business-analytics-club.jpg",
        description:
            "Gain hands-on skills in Excel, AI, Python, and Tableau through workshops. Our club aims to build community, provide learning opportunities, and spark career growth for any student who has the desire to explore the business analytics field.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "business-honors-association",
        name: "Business Honors Association",
        shortName: "Business Honors Association",
        category: "Honor Society",
        image: "media/images/clubs/business-honors-association.jpg",
        description:
            "The Business Honors Association, an honor student society, mentors high-achieving students into successful business professionals by developing them academically, professionally and socially. We aim to create the business leaders of tomorrow.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "calfresh-healthy-living-on-college-campuses",
        name: "CalFresh Healthy Living on College Campuses",
        shortName: "CHLCC",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/calfresh-healthy-living-on-college-campuses.jpg",
        description:
            "CalFresh Healthy Living on College Campuses aims to empower California State University students to adopt healthful dietary choices and promote the growth of physically active lifestyles through healthy community changes, individual health behaviors, and",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "calfresh-outreach",
        name: "CalFresh Outreach",
        shortName: "CalFresh Outreach",
        category: "Service and Advocacy",
        image: "media/images/clubs/calfresh-outreach.jpg",
        description:
            "",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "california-state-university-of-northridge-men-s-lacrosse-club",
        name: "California State University of Northridge Men's Lacrosse Club",
        shortName: "Men's Lacrosse Club",
        category: "Sports and Recreation",
        image: "media/images/clubs/california-state-university-of-northridge-men-s-lacrosse-club.jpg",
        description:
            "The CSUN Men's Lacrosse Club is for players to practice their fundamentals in the sport as well as develop sportsmanship and discipline with the focus on putting the other fellow first.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "california-state-university-northridge-geology-club",
        name: "California State University, Northridge Geology Club",
        shortName: "Geology Club",
        category: "Engineering and Technology",
        image: "media/images/clubs/california-state-university-northridge-geology-club.jpg",
        description:
            "Spreading awareness to not only geology related topics, but all related geosciences topics.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "california-state-university-northridge-student-chapter-of-the-earthquake-engineering-research-institute-eeri",
        name: "California State University, Northridge Student Chapter of the Earthquake Engineering Research Institute (EERI)",
        shortName: "EERI",
        category: "Engineering and Technology",
        image: "media/images/clubs/california-state-university-northridge-student-chapter-of-the-earthquake-engineering-research-institute-eeri.jpg",
        description:
            "",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "california-teachers-association-aspiring-educators",
        name: "California Teachers Association - Aspiring Educators",
        shortName: "CTAE",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/california-teachers-association-aspiring-educators.jpg",
        description:
            "The California Teachers Association - Aspiring Educators (CTA-AE) is a student union organization for future educators. We are aspiring teachers, counselors, psychologists, librarians, education professionals, school nurses, and higher education faculty.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "catholic-newman-club",
        name: "Catholic Newman Club",
        shortName: "Catholic Newman Club",
        category: "Religious and Spiritual",
        image: "media/images/clubs/catholic-newman-club.jpg",
        description:
            "Hi everyone, welcome to our page! CSUN Catholic Newman Club is a faith-based organization striving to build a sense of community and family. We serve the CSUN community as a welcoming & supportive environment for students to come together and grow!",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "ceramics-guild",
        name: "Ceramics Guild",
        shortName: "Ceramics Guild",
        category: "Arts and Media",
        image: "media/images/clubs/ceramics-guild.jpg",
        description:
            "The Ceramics Guild invites students to join. We host Clay Day, ceramics sales, the Shed Gallery show, and visiting artists. Members can also be featured on the CSUN Ceramics Instagram.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "chabad-jewish-student-center",
        name: "Chabad Jewish Student Center",
        shortName: "Chabad Jewish Student Center",
        category: "Religious and Spiritual",
        image: "media/images/clubs/chabad-jewish-student-center.jpg",
        description:
            "Chabad at CSUN is a thriving Jewish Student Center dedicated to providing students regardless of background, philosophy, or level of commitment. We have an open door environment for strengthening and enhancing Jewish life at CSUN.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "chai-society-csun",
        name: "Chai Society CSUN",
        shortName: "Chai Society CSUN",
        category: "Service and Advocacy",
        image: "media/images/clubs/chai-society-csun.jpg",
        description:
            "Students Supporting Israel (SSI) is a pro-Israel international campus movement that supports the State of Israel. Our mission is to be a clear and confident pro-Israel voice on college campuses and to support students in grassroots pro-Israel advocacy.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "child-and-adolescent-development-association",
        name: "Child and Adolescent Development Association",
        shortName: "CAD",
        category: "Academic and Professional",
        image: "media/images/clubs/child-and-adolescent-development-association.jpg",
        description:
            "CADA is meant to provide a means of communication among students, faculty and the community interested in Child and Adolescent Development. Along with sponsoring programs, workshops and other activities which relate to Child and Adolescent Development.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "chinese-students-and-scholars-association",
        name: "Chinese Students and Scholars Association",
        shortName: "Chinese Students and Scholars Associat",
        category: "Academic and Professional",
        image: "media/images/clubs/chinese-students-and-scholars-association.jpg",
        description:
            "CSUN Chinese Students and Scholars Association (CSUNCSSA), a non-profit organization, has been dedicated to helping the Chinese international students at CSUN solve their academic and living difficulties during their studies in the United States.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "christian-students-at-csun",
        name: "Christian Students at CSUN",
        shortName: "Christian Students at CSUN",
        category: "Religious and Spiritual",
        image: "media/images/clubs/christian-students-at-csun.jpg",
        description:
            "We are a community of believers who love our Lord Jesus and desire to pursue Him and serve God during our college years.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "circle-k-international",
        name: "Circle K International",
        shortName: "Circle K International",
        category: "Religious and Spiritual",
        image: "media/images/clubs/circle-k-international.jpg",
        description:
            "The collegiate branch of the Kiwanis International family, CKI is committed to developing leaders by offering unique service, leadership and fellowship opportunities that change the world and the lives of our members.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "citizen-science-club-california-state-university-northridge",
        name: "Citizen Science Club, California State University, Northridge",
        shortName: "CSCSUN",
        category: "Arts and Media",
        image: "media/images/clubs/citizen-science-club-california-state-university-northridge.jpg",
        description:
            "The Citizen Science Club unites students to collaborate on science projects, addressing real-world challenges for a meaningful community impact and fostering a passion for societal improvement through science.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "clinical-lab-science-association",
        name: "Clinical Lab Science Association",
        shortName: "CLSA",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/clinical-lab-science-association.jpg",
        description:
            "the Clinical Laboratory Science Association (CLSA) at CSUN supports students exploring careers in clinical lab science. The club provides resources and networking to help members navigate prerequisites and prepare for the growing demand in the CLS field.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "colorstack-at-california-state-university-northridge",
        name: "ColorStack at California State University, Northridge",
        shortName: "CCSUN",
        category: "Cultural and Identity",
        image: "media/images/clubs/colorstack-at-california-state-university-northridge.jpg",
        description:
            "ColorStack's mission is to increase the number of Black, Latinx, and Indigenous technologists who graduate and launch rewarding technical careers.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "construction-management-association-of-america-cmaa",
        name: "Construction Management Association of America (CMAA)",
        shortName: "CMA",
        category: "Engineering and Technology",
        image: "media/images/clubs/construction-management-association-of-america-cmaa.jpg",
        description:
            "As described by CMAA, Construction Management is a professional service that applies effective management techniques to the planning, design, and construction of a project from inception to completion for the purpose of controlling time, cost and quali...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "cope-health-scholars-club",
        name: "COPE Health Scholars Club",
        shortName: "COPE Health Scholars Club",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/cope-health-scholars-club.jpg",
        description:
            "The COPE Health Scholars Club at CSUN connects students to clinical experiences through the COPE Health Scholars Program, offering guidance, support, and networking opportunities for those pursuing healthcare careers.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "criminology-and-justice-studies-club",
        name: "Criminology and Justice Studies Club",
        shortName: "Criminology and Justice Studies Club",
        category: "Academic and Professional",
        image: "media/images/clubs/criminology-and-justice-studies-club.jpg",
        description:
            "The purposes of the Criminology and Justice Studies club is to foster and further the knowledge of the criminology and justice studies department at California State University Northridge as well as to inform club members of careers and opportunities",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-abpsi-student-circle",
        name: "CSUN ABPsi Student Circle",
        shortName: "ABPsi Student Circle",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/csun-abpsi-student-circle.jpg",
        description:
            "The CSUN Association of Black Psychologists (ABPsi) Student Circle is a student-led chapter of the national Association of Black Psychologists, created to unite and empower students who are passionate about Black psychology, mental health, and community.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-accounting-association",
        name: "CSUN Accounting Association",
        shortName: "Accounting Association",
        category: "Business and Professional",
        image: "media/images/clubs/csun-accounting-association.jpg",
        description:
            "",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-act-now",
        name: "CSUN Act Now",
        shortName: "Act Now",
        category: "Academic and Professional",
        image: "media/images/clubs/csun-act-now.jpg",
        description:
            "CSUN Act Now is a collaboration of students, faculty, and staff working to craft interactive activities, performances, lectures, seminars, and exhibits to help Matadors make informed decisions and participate meaningfully in their communities.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-aeronautics",
        name: "CSUN Aeronautics",
        shortName: "Aeronautics",
        category: "Engineering and Technology",
        image: "media/images/clubs/csunaero.jpg",
        description:
            "We're a professional and personal development club that focuses on Aerospace engineering. We host workshops and panels with industry professionals to introduce theoretical and practical experience. This club is lead by the SAE Aero Senior Design Project.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-alumni-relations",
        name: "CSUN Alumni Relations",
        shortName: "Alumni Relations",
        category: "Campus Resources and Support",
        image: "media/images/clubs/csun-alumni-relations.jpg",
        description:
            "Connect | Inspire | Celebrate | Give",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-anime-club",
        name: "CSUN Anime Club",
        shortName: "Anime Club",
        category: "Academic and Professional",
        image: "media/images/clubs/csun-anime-club.jpg",
        description:
            "The official MataSync page for the Anime Club of California State University Northridge. More details such as time and room on our discord! Feel free to drop by early or leave late at our Friday night club meetings!",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-art-galleries",
        name: "CSUN Art Galleries",
        shortName: "Art Galleries",
        category: "Arts and Media",
        image: "media/images/clubs/csun-art-galleries.jpg",
        description:
            "The Art Galleries at California State University, Northridge, are the major art exhibition space in the San Fernando Valley.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-association-for-supply-chain-management-american-society-for-quality",
        name: "CSUN Association for Supply Chain Management/American Society for Quality",
        shortName: "ASCM/ASQ",
        category: "Engineering and Technology",
        image: "media/images/clubs/csun-association-for-supply-chain-management-american-society-for-quality.jpg",
        description:
            "CSUN ASCM/ASQ",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-athletic-training-club",
        name: "CSUN Athletic Training Club",
        shortName: "Athletic Training Club",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/csun-athletic-training-club.jpg",
        description:
            "",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-athletics",
        name: "CSUN Athletics",
        shortName: "Athletics",
        category: "Sports and Recreation",
        image: "media/images/clubs/csun-athletics.jpg",
        description:
            "There's never a shortage of exciting sports action at CSUN. Athletics offers a full lineup of intercollegiate sports that provide high-level competition for student athletes and exciting, low-cost spectator opportunities for the entire community.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-badminton-club",
        name: "CSUN Badminton Club",
        shortName: "Badminton Club",
        category: "Sports and Recreation",
        image: "media/images/clubs/badminton.jpg",
        description:
            "Welcome to the CSUN Badminton Club. We are open to all badminton players who wish to learn, practice, compete, and have fun! With weekly practices and annual competitions, we'll strengthen your badminton skills, and guarantee many memorable experiences!",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-black-house",
        name: "CSUN Black House",
        shortName: "Black House",
        category: "Cultural and Identity",
        image: "media/images/clubs/csun-black-house.jpg",
        description:
            "The Black House mission is to foster student learning and achievement by celebrating the Black and African American culture. The Black House provides students with a plethora of resources that enhance their undergraduate experience.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-black-social-work-caucus",
        name: "CSUN Black Social Work Caucus",
        shortName: "Black Social Work Caucus",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/csun-black-social-work-caucus.jpg",
        description:
            "The purpose of the  CSUN Black Social Work Caucus is to allow space for Black students and allies to discuss and raise awareness on inequalities & injustices in Black communities while following social work values & ethics.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-board-game-and-tabletop-club",
        name: "CSUN Board Game and Tabletop Club",
        shortName: "Board Game and Tabletop Club",
        category: "Academic and Professional",
        image: "media/images/clubs/csun-board-game-and-tabletop-club.jpg",
        description:
            "The purpose of this Organization shall be to encourage and facilitate the playing of tabletop games and to provide a fun and engaging source of relaxation and socialization for students. We use Discord for communication:",
        email: "",
        discord: "https://discord.gg/qTWu3Ve",
        socials: {}
    },
    {
        id: "csun-brazilian-jiu-jitsu",
        name: "CSUN Brazilian Jiu-Jitsu",
        shortName: "Brazilian Jiu-Jitsu",
        category: "Sports and Recreation",
        image: "media/images/clubs/bjj.jpg",
        description:
            "We the members of the California State University, Northridge Brazilian Jiu Jitsu Club aim to foster the physical and mental well-being of its members through the practice of the discipline of grappling as defined by FILA, the recognized international ...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-career-center",
        name: "CSUN Career Center",
        shortName: "Career Center",
        category: "Arts and Media",
        image: "media/images/clubs/csun-career-center.jpg",
        description:
            "The Career Center offers career exploration and advisement along with job-search strategies to students and eligible alumni. By providing guidance on choosing a major and advice on how to make decisions, set goals and plan, the Career Center helps stud...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-cheerleading-squad",
        name: "CSUN Cheerleading Squad",
        shortName: "Cheerleading Squad",
        category: "Sports and Recreation",
        image: "media/images/clubs/csun-cheerleading-squad.jpg",
        description:
            "The CSUN Cheerleading Squad does a lot to raise spirit on CSUN's campus. Some events include but are not limited to, Hosting School events, Cheering at men's and women's basketball games, Competing at Cheer competitions, and Cheer events such as NCA...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-chemistry-and-biochemistry-club",
        name: "CSUN Chemistry & Biochemistry Club",
        shortName: "Chemistry & Biochemistry Club",
        category: "Academic and Professional",
        image: "media/images/clubs/csun-chemistry-and-biochemistry-club.jpg",
        description:
            "The CSUN Chemistry and Biochemistry club serves as a student-operated organization that drives the student interests of chemistry beyond the classroom experience.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-cinema-club",
        name: "CSUN Cinema Club",
        shortName: "Cinema Club",
        category: "Arts and Media",
        image: "media/images/clubs/csun-cinema-club.jpg",
        description:
            "The CSUN Cinema Club, bringing together all CTVA Majors and anyone interested in the film and television industry to network and collaborate.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-climbing-club",
        name: "CSUN Climbing Club",
        shortName: "Climbing Club",
        category: "Sports and Recreation",
        image: "media/images/clubs/csun-climbing-club.jpg",
        description:
            "The CSUN Climbing Club is a community of passionate rock climbers. We provide students with opportunities to develop their climbing skills in the gym and outside on real rock, and create memorable experiences and life-long bonds.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-club-baseball",
        name: "CSUN Club Baseball",
        shortName: "Club Baseball",
        category: "Sports and Recreation",
        image: "media/images/clubs/csun-club-baseball.jpg",
        description:
            "CSUN Club Baseball a member of the National Club Baseball Association (NCBA) where we play other colleges that are apart of the league. Composed of dedicated students, we balance school and baseball and strive to excel at both.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-consulting-and-advisory-association",
        name: "CSUN Consulting and Advisory Association",
        shortName: "Consulting and Advisory Association",
        category: "Business and Professional",
        image: "media/images/clubs/csun-consulting-and-advisory-association.jpg",
        description:
            "CSUN CAA is an organization dedicated to building community and support for students pursuing careers in Consulting, Advisory, and Audit by offering peer mentorship, networking opportunities, and professional guidance.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-coptic-christian-club",
        name: "CSUN Coptic Christian Club",
        shortName: "Coptic Christian Club",
        category: "Religious and Spiritual",
        image: "media/images/clubs/csun-coptic-christian-club.jpg",
        description:
            "CSUN Coptic Orthodox Christian Club",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-dance-honors-society",
        name: "CSUN Dance Honors Society",
        shortName: "Dance Honors Society",
        category: "Honor Society",
        image: "media/images/clubs/csun-dance-honors-society.jpg",
        description:
            "The CSUN Dance Honors Society is a student organization that is affiliated with the CSUN Chapter of the larger National Honor Society for Dance Arts (NHSDA). Students will gain awareness, experience, knowledge, & leadership skills in the field of dance.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-environmental-club",
        name: "CSUN Environmental Club",
        shortName: "Environmental Club",
        category: "Academic and Professional",
        image: "media/images/clubs/csun-environmental-club.jpg",
        description:
            "By CSUN Students, For CSUN Students! All Majors Welcome! We are a community of environmentalists who advocate for environmental ethics, eco-consciousness, sustainability, and inclusivity.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-esports",
        name: "CSUN Esports",
        shortName: "Esports",
        category: "Sports and Recreation",
        image: "media/images/clubs/esports.jpg",
        description:
            "CSUN Esports. #EnterTheRing. Join our Discord and be a part of the growing gaming community here at CSUN.",
        email: "",
        discord: "https://discord.gg/2RzmUUU3Mr",
        socials: {}
    },
    {
        id: "csun-filipino-american-student-association",
        name: "CSUN Filipino American Student Association",
        shortName: "Filipino American Student Association",
        category: "Cultural and Identity",
        image: "media/images/clubs/csun-filipino-american-student-association.jpg",
        description:
            "Founded in 1982, CSUN FASA was created to unify the Filipino-American community, as well as people of different backgrounds, through various activities, like: community service, cultural workshops, academic excellence, social/networking events and more.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-food-pantry",
        name: "CSUN Food Pantry",
        shortName: "Food Pantry",
        category: "Service and Advocacy",
        image: "media/images/clubs/csun-food-pantry.jpg",
        description:
            "",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-grace-on-campus",
        name: "CSUN Grace on Campus",
        shortName: "Grace on Campus",
        category: "Religious and Spiritual",
        image: "media/images/clubs/csun-grace-on-campus.jpg",
        description:
            "CSUN GOC meets weekly to study the Bible or go through a specific novel of choice. Within our weekly meetings, we also fellowship, pray, and worship together as we keep Jesus Christ the center of it all.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-hidden-road-initiative",
        name: "CSUN Hidden Road Initiative",
        shortName: "Hidden Road Initiative",
        category: "Academic and Professional",
        image: "media/images/clubs/csun-hidden-road-initiative.jpg",
        description:
            "CSUN Hidden Road Initiative (HRI) is a supporting branch of the non-profit organization that aims to provide educational and leadership opportunities for students living in remote villages in Armenia.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-hillel",
        name: "CSUN Hillel",
        shortName: "Hillel",
        category: "Religious and Spiritual",
        image: "media/images/clubs/csun-hillel.jpg",
        description:
            "Hillel 818 serves the campuses at California State University, Northridge, Pierce College & Los Angeles Valley College and is your Jewish campus connection. Whatever your background or interests, Hillel is here for you.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-ice-hockey-club",
        name: "CSUN Ice Hockey Club",
        shortName: "Ice Hockey Club",
        category: "Sports and Recreation",
        image: "media/images/clubs/icehockey.jpg",
        description:
            "CSUN Ice Hockey was established 1971 making it the longest continuously running club sport at Cal State Northridge.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-illustration-society",
        name: "CSUN Illustration Society",
        shortName: "Illustration Society",
        category: "Business and Professional",
        image: "media/images/clubs/csun-illustration-society.jpg",
        description:
            "The CSUN Illustration Society is to create and encourage a sense of community amongst students interested in all disciplines of Illustration (print, exhibition, entertainment, scientific, advertising, and emerging markets).",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-interior-design-student-association",
        name: "CSUN Interior Design Student Association",
        shortName: "Interior Design Student Association",
        category: "Cultural and Identity",
        image: "media/images/clubs/csun-interior-design-student-association.jpg",
        description:
            "CIDSA is the official student run Interior Design club for CSUN Interior Design students.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-jishin-taiko-ensemble",
        name: "CSUN Jishin Taiko Ensemble",
        shortName: "Jishin Taiko Ensemble",
        category: "Arts and Media",
        image: "media/images/clubs/csun-jishin-taiko-ensemble.jpg",
        description:
            "CSUN\u2019s Jishin Taiko Ensemble was born from an interest in not only Japanese taiko drumming and Japanese culture but was also born from a desire to form an interpersonal social connection with the Japanese-American community at Cal State University, Nor...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-latin-club",
        name: "CSUN Latin Club",
        shortName: "Latin Club",
        category: "Cultural and Identity",
        image: "media/images/clubs/csun-latin-club.jpg",
        description:
            "Our club explores Roman culture through literature, theater, cuisine, and Latin. By engaging in activities tied to these traditions, members gain insight into how ancient Rome\u2019s legacy still shapes art, language, and daily life today.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-matador-archery",
        name: "CSUN Matador Archery",
        shortName: "Matador Archery",
        category: "Sports and Recreation",
        image: "media/images/clubs/archery.jpg",
        description:
            "The CSUN Archery club is the representative for all forms of archery on campus. Whether you've shot in competition, shot a few times in a Summer camp, or even never shot at all, our club is dedicated to introducing and cultivating the sport to anyone!",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-matador-speech-and-debate-team",
        name: "CSUN Matador Speech and Debate Team",
        shortName: "Matador Speech and Debate Team",
        category: "Arts and Media",
        image: "media/images/clubs/csun-matador-speech-and-debate-team.jpg",
        description:
            "The CSUN Forensic's Team has two parts: Speech and Debate. In speech you competitively speak in individual events of a variety against schools across the nation. In debate, you and a partner debate both sides of a set resolution against teams across th..",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-matafurs",
        name: "CSUN MataFurs",
        shortName: "MataFurs",
        category: "Arts and Media",
        image: "media/images/clubs/csun-matafurs.jpg",
        description:
            "CSUN MataFurs creates an inclusive, fun, and safe community space for students who are part of the \u201cfurry\u201d fandom (those who like anthropomorphic animal characters; e.g. Kung Fu panda) or are curious and supportive of the community. Everyone is welcome!",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-men-s-basketball-club",
        name: "CSUN Men's Basketball Club",
        shortName: "Men's Basketball Club",
        category: "Sports and Recreation",
        image: "media/images/clubs/csun-men-s-basketball-club.jpg",
        description:
            "We are a competitive, determined team that participates in the nationwide NCBBA club basketball tournament.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-men-s-soccer-club",
        name: "CSUN Men's Soccer Club",
        shortName: "Men's Soccer Club",
        category: "Sports and Recreation",
        image: "media/images/clubs/csun-men-s-soccer-club.jpg",
        description:
            "Men's Soccer Club are students who still want to compete at the college level. We run a competitive team that also travels regularly to compete against other college club teams all over SoCal. We practice 3 times a week from 7:00 to 9:00 AM.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-men-s-volleyball-club",
        name: "CSUN Men's Volleyball Club",
        shortName: "Men's Volleyball Club",
        category: "Sports and Recreation",
        image: "media/images/clubs/csun-men-s-volleyball-club.jpg",
        description:
            "CSUN Men\u2019s Volleyball Club's goal is to give students the opportunity to play competitive collegiate club volleyball while building lasting relationships with one another that are based upon understanding, commitment, and camaraderie.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-mentorship-program",
        name: "CSUN Mentorship Program",
        shortName: "Mentorship Program",
        category: "Service and Advocacy",
        image: "media/images/clubs/csun-mentorship-program.jpg",
        description:
            "The CSUN Mentorship Program is a peer mentoring program that promotes student success at CSUN.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-mens-rugby-club",
        name: "CSUN Men\u2019s Rugby Club",
        shortName: "Men\u2019s Rugby Club",
        category: "Fraternity and Sorority Life",
        image: "media/images/clubs/csun-mens-rugby-club.jpg",
        description:
            "The purpose of the CSUN Men\u2019s Rugby Club is to foster brotherhood, sportsmanship, respect, leadership, and discipline among CSUN students who share a love for the game of rugby.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-national-student-nurses-association",
        name: "CSUN National Student Nurses' Association",
        shortName: "NSNA",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/csun-national-student-nurses-association.jpg",
        description:
            "NSNA is a nationally recognized club on across college campuses. The National Student Nurses\u2019 Association (NSNA) fosters the development of nursing students in their professional, academic and personal endeavors. NSNA provides students with leadership...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-photo-society",
        name: "CSUN Photo Society",
        shortName: "Photo Society",
        category: "Arts and Media",
        image: "media/images/clubs/csun-photo-society.jpg",
        description:
            "A networking and educational resource for all CSUN students interested in the photographic arts, and a platform to share incredible artists and artworks with the entire CSUN student body.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-physical-therapy-club",
        name: "CSUN Physical Therapy Club",
        shortName: "Physical Therapy Club",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/csun-physical-therapy-club.jpg",
        description:
            "The CSUN PT Club is an organization that promotes education and collaboration between faculty and cohorts of the DPT program at CSUN through advanced studies and community awareness.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-piano-club",
        name: "CSUN Piano Club",
        shortName: "Piano Club",
        category: "Arts and Media",
        image: "media/images/clubs/csun-piano-club.jpg",
        description:
            "The CSUN Piano Club is an organization that supports piano students in achieving excellence in their musical endeavors by organizing studio classes, masterclasses, clinics, workshops and performances. All and any students interested in piano are welcome!",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-planned-parenthood-generation-action",
        name: "CSUN Planned Parenthood Generation Action",
        shortName: "Planned Parenthood Generation Action",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/csun-planned-parenthood-generation-action.jpg",
        description:
            "PPGA CSUN aims to facilitate student leaders, educators, and community-serving activists who are dedicated to fulfilling Planned Parenthood\u2019s mission of promoting reproductive health care access and education to empower the Matador family.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-political-science-student-association-pssa",
        name: "CSUN Political Science Student Association (PSSA)",
        shortName: "PSSA",
        category: "Cultural and Identity",
        image: "media/images/clubs/csun-political-science-student-association-pssa.jpg",
        description:
            "To foster an environment for all interested in the world of Political Science and politics.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-pre-physical-therapy-club",
        name: "CSUN Pre-Physical Therapy Club",
        shortName: "Pre-Physical Therapy Club",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/csun-pre-physical-therapy-club.jpg",
        description:
            "To educate students that are interested in Physical Therapy on how to build a strong application when applying to Physical Therapy schools, inform them on what Physical Therapy school is going to be like, and to prepare them for higher education.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-real-estate-club",
        name: "CSUN Real Estate Club",
        shortName: "Real Estate Club",
        category: "Business and Professional",
        image: "media/images/clubs/csun-real-estate-club.jpg",
        description:
            "The CSUN Real Estate Club exists to provide a place for all real estate interested individuals to come together, discover, and network through the many facets of the real estate community.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-stem-bible-study",
        name: "CSUN STEM BIBLE STUDY",
        shortName: "STEM BIBLE STUDY",
        category: "Religious and Spiritual",
        image: "media/images/clubs/csun-stem-bible-study.jpg",
        description:
            "We are a multicultural Christian community that seeks to disciple those in the STEM fields and beyond it. Join us as we see where The Gospel and the natural world intersect.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-study-abroad",
        name: "CSUN Study Abroad",
        shortName: "Study Abroad",
        category: "Campus Resources and Support",
        image: "media/images/clubs/csun-study-abroad.jpg",
        description:
            "Study Abroad",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-swim-club",
        name: "CSUN Swim Club",
        shortName: "Swim Club",
        category: "Sports and Recreation",
        image: "media/images/clubs/csun-swim-club.jpg",
        description:
            "The CSUN Swim Club provides an opportunity for students to improve their swimming skills and experience on campus both competitively and recreationally.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-table-tennis-team",
        name: "CSUN Table Tennis Team",
        shortName: "Table Tennis Team",
        category: "Sports and Recreation",
        image: "media/images/clubs/csun-table-tennis-team.jpg",
        description:
            "Welcome to CSUN Table Tennis! This organization welcomes anyone who loves Table Tennis to both learn the game and compete in a school-to-school competition for the chance to be NCTTA National Champions. Our number one goal is to win and have fun!",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-tennis-club",
        name: "CSUN Tennis Club",
        shortName: "Tennis Club",
        category: "Sports and Recreation",
        image: "media/images/clubs/csun-tennis-club.jpg",
        description:
            "CSUN Tennis Club is a sport club on the CSUN campus that participates in tournaments across the nation (but mostly in California). Prospective players are encouraged to have experience in the sport.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-volunteer-income-tax-assistance",
        name: "CSUN Volunteer Income Tax Assistance",
        shortName: "VITA",
        category: "Business and Professional",
        image: "media/images/clubs/csun-volunteer-income-tax-assistance.jpg",
        description:
            "CSUN VITA Clinic is a cost-free income tax assistance service to low-income residents in the San Fernando Valley and beyond.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-water-polo-club",
        name: "CSUN Water Polo Club",
        shortName: "Water Polo Club",
        category: "Sports and Recreation",
        image: "media/images/clubs/csun-water-polo-club.jpg",
        description:
            "Our club was founded in 2011 and we have been growing and outperforming ourselves each year. We strive to expose the CSUN community to collegiate water polo and compete in the Pacific Coast Division. We strive for only excellence, respect, sportsmanship",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-women-in-science",
        name: "CSUN Women in Science",
        shortName: "Women in Science",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/csun-women-in-science.jpg",
        description:
            "California State University, Northridge - Women in Science (CSUN WiS) is intended to be an encouraging environment to help women in STEM careers (undergraduate, graduate, staff, and faculty) with academic and professional development.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-women-s-lacrosse-club",
        name: "CSUN Women's Lacrosse Club",
        shortName: "Women's Lacrosse Club",
        category: "Sports and Recreation",
        image: "media/images/clubs/csun-women-s-lacrosse-club.jpg",
        description:
            "Women's Lacrosse Club is a year-long sport, but our main season is during the Spring semester. The club is a DII club team and focuses on meeting new people and having fun while playing a completely different sport and in a new environment!",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-women-s-rugby-club",
        name: "CSUN Women's Rugby Club",
        shortName: "Women's Rugby Club",
        category: "Sports and Recreation",
        image: "media/images/clubs/csun-women-s-rugby-club.jpg",
        description:
            "Founded in 2011, our team currently competes in Division 2. This exciting game is like no other sport and is a great way to meet new friends! Practices are on Tuesday and Thursday evenings 6:00 to 8:30! We would love to have you be a part of our team!",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-women-s-volleyball-club",
        name: "CSUN Women's Volleyball Club",
        shortName: "Women's Volleyball Club",
        category: "Sports and Recreation",
        image: "media/images/clubs/csun-women-s-volleyball-club.jpg",
        description:
            "Our purpose on this campus is to provide play for women who wish to continue their volleyball careers at a competitive level. For inquiries, feel free to email us at womensvolleyball@csunas.org",
        email: "womensvolleyball@csunas.org",
        discord: "",
        socials: {}
    },
    {
        id: "csun-wrestling-club",
        name: "CSUN Wrestling Club",
        shortName: "Wrestling Club",
        category: "Sports and Recreation",
        image: "media/images/clubs/csun-wrestling-club.jpg",
        description:
            "The CSUN Wrestling Club is a part of the CSUN Sports Club organization, we are a competitive team that competes in the NCWA (National College Wrestling Association) against colleges across California, the West Coast, and the nation.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "csun-s-women-s-basketball-club",
        name: "CSUN's Women's Basketball Club",
        shortName: "CSUN's Women's Basketball Club",
        category: "Sports and Recreation",
        image: "media/images/clubs/csun-s-women-s-basketball-club.jpg",
        description:
            "Competitive women\u2019s basketball team for students who want to compete at CSUN.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "dance-team",
        name: "Dance Team",
        shortName: "Dance Team",
        category: "Sports and Recreation",
        image: "media/images/clubs/dance-team.jpg",
        description:
            "CSUN Dance Team. We're a team that shares a common passion for dance. We perform at sporting events and on-campus events for CSUN.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "david-nazarian-college-of-business-and-economics",
        name: "David Nazarian College of Business and Economics",
        shortName: "DNCBE",
        category: "Business and Professional",
        image: "media/images/clubs/david-nazarian-college-of-business-and-economics.jpg",
        description:
            "",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "deaf-csunians",
        name: "Deaf CSUNians",
        shortName: "Deaf CSUNians",
        category: "Cultural and Identity",
        image: "media/images/clubs/deaf-csunians.jpg",
        description:
            "Welcome to the Deaf CSUNians page! We're here to spread the awareness on our unique culture of the Deaf* and Hard-of-Hearing people, ASL natives, ASL users, and all alike! We also want to emphasize the importance of giving to CSUN community, especially...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "deaf-studies-association",
        name: "Deaf Studies Association",
        shortName: "Deaf Studies Association",
        category: "Cultural and Identity",
        image: "media/images/clubs/deaf-studies-association.jpg",
        description:
            "Our mission is to bring together people of varied backgrounds for the purpose of celebrating American Sign Language and raising awareness of Deaf Culture. Our organization supports social justice for all peoples and hopes to bridge communication betwee...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "delta-delta-delta",
        name: "Delta Delta Delta",
        shortName: "Delta Delta Delta",
        category: "Fraternity and Sorority Life",
        image: "media/images/clubs/delta-delta-delta.jpg",
        description:
            "Delta Delta Delta is known nationally for being one of the most prestigious sororities. Out of the 26 sororities that are part of the National Panhellenic Conference, Delta Delta Delta is ranked in the top 3. We are known as leaders in the Greek Commun...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "delta-sigma-pi",
        name: "Delta Sigma Pi",
        shortName: "Delta Sigma Pi",
        category: "Fraternity and Sorority Life",
        image: "media/images/clubs/delta-sigma-pi.jpg",
        description:
            "Delta Sigma Pi is a professional fraternity organized to foster the study of business in universities; to encourage scholarship, social activity and the association of students for their mutual advancement by research and practice; to promote closer af...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "delta-zeta-sorority",
        name: "Delta Zeta Sorority",
        shortName: "Delta Zeta Sorority",
        category: "Fraternity and Sorority Life",
        image: "media/images/clubs/delta-zeta-sorority.jpg",
        description:
            "The women of Delta Zeta pride themselves on being strong leaders, women with overwhelming potential, and a strong sisterhood bond that is always changing but everlasting. The sisters of Delta Zeta are strong-minded, independent, responsible women.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "department-of-chicana-o-studies",
        name: "Department of Chicana/o Studies",
        shortName: "Department of Chicana/o Studies",
        category: "Cultural and Identity",
        image: "media/images/clubs/department-of-chicana-o-studies.jpg",
        description:
            "Department of Chicana/o Studies, College of Humanities",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "doctors-without-borders-friends-of-msf-csun",
        name: "Doctors Without Borders - Friends of MSF CSUN",
        shortName: "DWBFMC",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/doctors-without-borders-friends-of-msf-csun.jpg",
        description:
            "Doctors without Borders is a global humanitarian organization that brings medical care to people affected by conflict, disasters, epidemics, and social exclusion. The CSUN chapter will help continue this mission and lend a helping hand to those in need.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "dreams-to-be-heard",
        name: "Dreams To Be Heard",
        shortName: "Dreams To Be Heard",
        category: "Engineering and Technology",
        image: "media/images/clubs/dreams-to-be-heard.jpg",
        description:
            "\u201cWe are a family advocating for immigrant rights, through education, activism, and moral support to empower, liberate, and bring equality to our community.\u201d",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "east-african-student-association",
        name: "East African Student Association",
        shortName: "East African Student Association",
        category: "Cultural and Identity",
        image: "media/images/clubs/east-african-student-association.jpg",
        description:
            "The purpose of East African Student Association (EASA) is to share the Ethiopian and Eritrean culture here at CSUN while building a strong and supportive community.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "end-overdose-csun",
        name: "End Overdose CSUN",
        shortName: "End Overdose CSUN",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/end-overdose-csun.jpg",
        description:
            "End Overdose is a 501(c)(3) nonprofit organization committed to ending drug-related overdose deaths through education, medical intervention, and public awareness.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "entrepreneurs-club",
        name: "Entrepreneurs Club",
        shortName: "Entrepreneurs Club",
        category: "Business and Professional",
        image: "media/images/clubs/entrepreneurs-club.jpg",
        description:
            "Join a community of aspiring, driven student entrepreneurs. Dare to Disrupt.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "environmental-and-occupational-health-student-association",
        name: "Environmental & Occupational Health Student Association",
        shortName: "EOH",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/environmental-and-occupational-health-student-association.jpg",
        description:
            "Hello everyone, welcome to EOHSA! Mainly for EOH Majors but welcome to any CSUN student. We do workshops, facility tours, guest speakers, events, newsletters, and so much more!",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "eop-dream-center",
        name: "EOP DREAM Center",
        shortName: "EOP DREAM Center",
        category: "Service and Advocacy",
        image: "media/images/clubs/eop-dream-center.jpg",
        description:
            "",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "eop-student-association",
        name: "EOP Student Association",
        shortName: "EOP Student Association",
        category: "Cultural and Identity",
        image: "media/images/clubs/eop-student-association.jpg",
        description:
            "The EOP Student Association will provide leadership opportunities, events, and programs to increase social awareness and facilitate cross-cultural interactions and discussions.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "eta-kappa-nu",
        name: "Eta Kappa Nu",
        shortName: "Eta Kappa Nu",
        category: "Honor Society",
        image: "media/images/clubs/eta-kappa-nu.jpg",
        description:
            "Eta Kappa Nu - Lambda Beta is the California State University of Northridge Chapter of the IEEE Academic Honors Society for Electrical and Computer Engineering.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "every-nation-campus",
        name: "Every Nation Campus",
        shortName: "Every Nation Campus",
        category: "Academic and Professional",
        image: "media/images/clubs/every-nation-campus.jpg",
        description:
            "We exist to honor God by establishing  Christ-centered, Spirit-empowered, socially responsible churches and campus ministries in every nation.We love Jesus and want others to know Him too!",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "exercise-is-medicine-on-campus",
        name: "Exercise is Medicine on Campus",
        shortName: "Exercise is Medicine on Campus",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/exercise-is-medicine-on-campus.jpg",
        description:
            "Exercise is Medicine on Campus is an intitiative by American College of Sports Medicine encouraging individuals to become more physically active on their own campus.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "fasmode-dance-crew",
        name: "Fasmode Dance Crew",
        shortName: "Fasmode Dance Crew",
        category: "Arts and Media",
        image: "media/images/clubs/fasmode-dance-crew.jpg",
        description:
            "Fasmode Dance Crew has been proudly representing Northridge since 2002. We are a competitive urban dance crew that branched out from CSUN\u2019S Filipino American Student Association (FASA).",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "feminist-students-association",
        name: "Feminist Students Association",
        shortName: "Feminist Students Association",
        category: "Cultural and Identity",
        image: "media/images/clubs/feminist-students-association.jpg",
        description:
            "At the Feminist Students Association, students can engage in meaningful discussion about intersectional feminism and gender, organize events to raise awareness about current women's issues, and find support and camaraderie among students and faculty.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "financial-management-association",
        name: "Financial Management Association",
        shortName: "Financial Management Association",
        category: "Business and Professional",
        image: "media/images/clubs/financial-management-association.jpg",
        description:
            "Our mission at CSUN is to empower students and alumni in finance by providing exclusive growth opportunities. Through networking, mentorship, and professional development, we help members build connections, gain skills, and navigate their future careers.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "food-science-association-club-of-csun",
        name: "Food Science Association Club of CSUN",
        shortName: "Food Science Association Club of CSUN",
        category: "Engineering and Technology",
        image: "media/images/clubs/food-science-association-club-of-csun.jpg",
        description:
            "The Food Science Association (FSA) aims to promote leadership and introduce students to the broad field of food science and technology. Through FSA, students and faculty at CSUN can meet and build relationships outside of class, allowing for better colla",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "fraternity-and-sorority-life",
        name: "Fraternity & Sorority Life",
        shortName: "Fraternity & Sorority Life",
        category: "Fraternity and Sorority Life",
        image: "media/images/clubs/fraternity-and-sorority-life.jpg",
        description:
            "An area of the Matador Involvement Center, Fraternity and Sorority Life (FSL) at CSUN is comprised of over 40 Greek letter organizations that are committed to leadership, scholarship/academics, philanthropy/service, and brotherhood/sisterhood/siblinghood",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "gamma-zeta-alpha-fraternity",
        name: "Gamma Zeta Alpha Fraternity",
        shortName: "Gamma Zeta Alpha Fraternity",
        category: "Fraternity and Sorority Life",
        image: "media/images/clubs/gamma-zeta-alpha-fraternity.jpg",
        description:
            "Gamma Zeta Alpha Fraternity, Inc. was established at California State University Northridge on December 3, 1993. The principles of our organization are Academic Excellence, Community Service, and the Maintenance of the Latino Culture through Brotherhood.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "ge-honors-club",
        name: "GE Honors Club",
        shortName: "GE Honors Club",
        category: "Honor Society",
        image: "media/images/clubs/ge-honors-club.jpg",
        description:
            "The club\u2019s purpose is to unite students who belong to the General Education (GE) Honors Program in order to seek support among each other, broaden their knowledge about the program, and contribute to the community.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "go-with-the-flow",
        name: "Go with the Flow",
        shortName: "Go with the Flow",
        category: "Service and Advocacy",
        image: "media/images/clubs/go-with-the-flow.jpg",
        description:
            "Go With the Flow (GWTF) is a program at CSUN with the goal to expand accessibility, awareness, and education around menstrual equity. GWTF is a collaboration between the Women\u2019s Research and Resources Center.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "good-shepherd-fellowship",
        name: "Good Shepherd Fellowship",
        shortName: "Good Shepherd Fellowship",
        category: "Religious and Spiritual",
        image: "media/images/clubs/good-shepherd-fellowship.jpg",
        description:
            "Good Shepherd Fellowship (GSF) is a Christian club dedicated to helping students know God personally. Our main goal is to provide you with a community that will support you in your walk with Christ.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "graduate-arts-association",
        name: "Graduate Arts Association",
        shortName: "Graduate Arts Association",
        category: "Arts and Media",
        image: "media/images/clubs/graduate-arts-association.jpg",
        description:
            "Art is everywhere; it is as diverse as our student body and surrounding community. The Graduate Arts Association (GAA) seeks to share with the students of CSUN the incredible power of visual language, and to create a community of undergraduate, graduat...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "graduate-student-association-for-health-administration",
        name: "Graduate Student Association for Health Administration",
        shortName: "GHA",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/graduate-student-association-for-health-administration.jpg",
        description:
            "GSAHA helps students in the Health Administration program prepare for a career in the healthcare system by organizing essential skills workshops taught by industry professionals; hosting networking events that connect students with established industry...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "health-administration-student-association",
        name: "Health Administration Student Association",
        shortName: "Health Administration Student Associat",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/health-administration-student-association.jpg",
        description:
            "HASA is a student led organization that strives to assist students in matters relating to the curriculum, field experience, and orientation of new students while providing social and professional extracurricular activities and events for its members.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "health-education-student-organization",
        name: "Health Education Student Organization",
        shortName: "Health Education Student Organization",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/health-education-student-organization.jpg",
        description:
            "Health Education Student Organization (H.E.S.O.) is the sole representative student organization for Public Health undergraduates at CSUN. For more information please check out heso.weebly.com.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "hermanas-unidas-de-california-state-university-northridge",
        name: "Hermanas Unidas de California State University, Northridge",
        shortName: "HUCSUN",
        category: "Service and Advocacy",
        image: "media/images/clubs/hermanas-unidas-de-california-state-university-northridge.jpg",
        description:
            "Hermanas Unidas de CSUN provides undergraduate, graduate, and professional leadership opportunities and resources to students from underrepresented communities by participating in and organizing academic, community service, and social events/workshops.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "history-club",
        name: "History Club",
        shortName: "History Club",
        category: "Academic and Professional",
        image: "media/images/clubs/history-club.jpg",
        description:
            "The History Club will seek to expand the reaches of history into the local community and the university. The organization will also prioritize strengthening the support students have with instructors in the field to ensure success beyond the classroom.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "hosa-future-health-professionals",
        name: "HOSA - Future Health Professionals",
        shortName: "HOSA",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/hosa-future-health-professionals.jpg",
        description:
            "CSUN HOSA is open to all majors and students interested in medicine. Join for leadership, service, mentorship, competitions, and the chance to network at 3 conferences while preparing for your future in healthcare.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "in-the-loop-knitting-and-crochet-club",
        name: "In the Loop | Knitting and Crochet Club",
        shortName: "LKC",
        category: "Academic and Professional",
        image: "media/images/clubs/in-the-loop-knitting-and-crochet-club.jpg",
        description:
            "In the Loop is an organization dedicated to creating a communal space where individuals can learn how to knit and crochet together and share interest in these crafts, while also giving back to their community through this craft.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "independent-greek-council-igc",
        name: "Independent Greek Council (IGC)",
        shortName: "Independent Greek Council",
        category: "Fraternity and Sorority Life",
        image: "media/images/clubs/independent-greek-council-igc.jpg",
        description:
            "We the members of the Independent Greek Council (IGC) at California State University, Northridge (CSUN) recognize a need to unify under-represented Greek organizations with similar goals and purposes while encouraging the values of diversity...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "indian-students-association",
        name: "Indian Students Association",
        shortName: "Indian Students Association",
        category: "Cultural and Identity",
        image: "media/images/clubs/indian-students-association.jpg",
        description:
            "Indian Students Association mainly aims to unite and collectively celebrate the Indian culture. We aim to include every CSUN Indian student and smoothen their student experience at CSUN. We seek to increase cooperation between students & faculty at CSUN.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "institute-of-electrical-and-electronics-engineers-ieee",
        name: "Institute of Electrical and Electronics Engineers (IEEE)",
        shortName: "IEEE",
        category: "Engineering and Technology",
        image: "media/images/clubs/ieee.jpg",
        description:
            "IEEE is the world\u2019s largest professional association dedicated to advancing technological innovation and excellence for the benefit of humanity. IEEE and its members inspire a global community through IEEE\u2019s highly cited publications, conferences, tech...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "interfraternity-council",
        name: "Interfraternity Council",
        shortName: "Interfraternity Council",
        category: "Fraternity and Sorority Life",
        image: "media/images/clubs/interfraternity-council.jpg",
        description:
            "The IFC council is composed of 8 different fraternities; Alpha Epsilon Pi, Lambda Chi Alpha, Pi Kappa Alpha, Sigma Alpha Epsilon, Sigma Phi Epsilon, Tau Omega Rho, Phi Delta Theta, and Phi Kappa Psi.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "international-and-exchange-student-center",
        name: "International & Exchange Student Center",
        shortName: "IEC",
        category: "Service and Advocacy",
        image: "media/images/clubs/international-and-exchange-student-center.jpg",
        description:
            "The International and Exchange Student Center (IESC) provides services to newly admitted and continuing international F-1 and J-1 visa students, Fulbright students and participants of the study abroad program and National Student Exchange (NSE).",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "international-student-community",
        name: "International Student Community",
        shortName: "International Student Community",
        category: "Cultural and Identity",
        image: "media/images/clubs/international-student-community.jpg",
        description:
            "The International Students Community (ISC) is a registered student organization at California State University, Northridge. The main aim of ISC is to provide International students with the opportunity to experience and appreciate different cultures",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "intervarsity-matador-christian-fellowship-ivmcf",
        name: "InterVarsity Matador Christian Fellowship (IVMCF)",
        shortName: "IMCF",
        category: "Religious and Spiritual",
        image: "media/images/clubs/intervarsity-matador-christian-fellowship-ivmcf.jpg",
        description:
            "Our Vision is to build a multi-ethinic community that shares the love of God with all 39,000 students at CSUN.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "iranian-student-association-at-csun",
        name: "Iranian Student Association at CSUN",
        shortName: "Iranian Student Association at CSUN",
        category: "Cultural and Identity",
        image: "media/images/clubs/iranian-student-association-at-csun.jpg",
        description:
            "ISA is an independent, non-political, non-religious, cultural, social, and academic organization, whose objective is to promote an understanding of Persian culture and to help foster friendships among different cultural groups.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "istart",
        name: "iSTART",
        shortName: "iSTART",
        category: "Arts and Media",
        image: "media/images/clubs/istart.jpg",
        description:
            "iSTART is a SAMHSA-funded program that aims to bring awareness to substance use issues and focuses on substance abuse prevention for CSUN students.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "japanese-student-association",
        name: "Japanese Student Association",
        shortName: "Japanese Student Association",
        category: "Cultural and Identity",
        image: "media/images/clubs/japanese-student-association.jpg",
        description:
            "The Japanese Student Association (JSA) aims to spread and promote Japanese culture at California State University, Northridge.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "joint-advocates-on-disordered-eating-jade",
        name: "Joint Advocates on Disordered Eating (JADE)",
        shortName: "Joint Advocates on Disordered Eating",
        category: "Service and Advocacy",
        image: "media/images/clubs/joint-advocates-on-disordered-eating-jade.jpg",
        description:
            "Joint Advocates on Disordered Eating is a peer education program, located in the University Counseling Services, dedicated to raising awareness for eating disorders and disordered eating.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "kappa-kappa-gamma",
        name: "Kappa Kappa Gamma",
        shortName: "Kappa Kappa Gamma",
        category: "Fraternity and Sorority Life",
        image: "media/images/clubs/kappa-kappa-gamma.jpg",
        description:
            "Kappa Kappa Gamma is a sorority committed to finding genuine women and promoting genuine sisterhood. Our national philanthropy supports mental health awareness. We strive to embody our motto \"Dream Boldly and Live Fully\" everyday.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "kappa-omicron-nu-honor-society-national-honor-society-for-the-human-sciences",
        name: "Kappa Omicron Nu Honor Society (National Honor Society for the Human Sciences)",
        shortName: "Kappa Omicron Nu Honor Society",
        category: "Honor Society",
        image: "media/images/clubs/kappa-omicron-nu-honor-society-national-honor-society-for-the-human-sciences.jpg",
        description:
            "Kappa Omicron Nu National Honor Society for the Human Sciences (KON) promotes empowered leaders who use an integrative approach to enhance quality of living through excellence in scholarship, leadership, and research.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "la-familia-de-california-state-university-northridge",
        name: "La Familia de California State University, Northridge",
        shortName: "FCSUN",
        category: "Cultural and Identity",
        image: "media/images/clubs/la-familia-de-california-state-university-northridge.jpg",
        description:
            "La Familia de CSUN is an organization dedicated to supporting and focusing on young Latinx Students to graduate from four-year public institutions. We use our three pillars: Academic Excellence, Community Service, and Social Networking to reach our goal.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "lambda-chi-alpha",
        name: "Lambda Chi Alpha",
        shortName: "Lambda Chi Alpha",
        category: "Fraternity and Sorority Life",
        image: "media/images/clubs/lambda-chi-alpha.jpg",
        description:
            "Lambda Chi Alpha is one of the largest men\u2019s fraternities in North America providing brotherhood on college campuses to nearly 11,000 today and more than 290,000 alumni across the globe. Our brotherhood is dedicated to enhancing the collegiate experien...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "lambda-theta-nu-sorority-inc",
        name: "Lambda Theta Nu Sorority, Inc.",
        shortName: "Lambda Theta Nu Sorority, Inc.",
        category: "Fraternity and Sorority Life",
        image: "media/images/clubs/lambda-theta-nu-sorority-inc.jpg",
        description:
            "The purpose of Lambda Theta Nu Sorority, Inc. shall be to open doors of opportunity to the Latinas of our community. Our primary focuses are academic excellence and meeting the needs of Latina women in higher education. Lambda Theta Nu Sorority, Inc. a...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "latino-business-association-lba",
        name: "Latino Business Association (LBA)",
        shortName: "Latino Business Association",
        category: "Business and Professional",
        image: "media/images/clubs/latino-business-association-lba.jpg",
        description:
            "The Latino Business Association (LBA) is a student ran association at California State University, Northridge in which focuses on the development and growth of our members academically, professionally, and socially. In addition, LBA provides financial ...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "layer-8",
        name: "Layer 8",
        shortName: "Layer 8",
        category: "Engineering and Technology",
        image: "media/images/clubs/layer8.jpg",
        description:
            "Layer 8 Cybersecurity Club focuses on educating our members and community in all aspects of technology and information security, from networking fundamentals and command-line skills to modern cybersecurity concepts.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "lebanese-student-association",
        name: "Lebanese Student Association",
        shortName: "Lebanese Student Association",
        category: "Cultural and Identity",
        image: "media/images/clubs/lebanese-student-association.jpg",
        description:
            "Welcome to CSUN's official Lebanese Student Association! Lebanese Student Association is a non -profit, -religious, -political, -discriminatory organization founded by students and for students at Cal State University Northridge! Our goal is to promote...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "life-sciences-society",
        name: "Life Sciences Society",
        shortName: "Life Sciences Society",
        category: "Academic and Professional",
        image: "media/images/clubs/life-sciences-society.jpg",
        description:
            "The mission of the Life Sciences Society (LSS) is to create a dynamic and inclusive community and empower CSUN Life Sciences students to expand their knowledge, connect with other students and faculty, and provide them with resources and opportunities.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "linguistics-and-tesl-club",
        name: "Linguistics & TESL Club",
        shortName: "Linguistics & TESL Club",
        category: "Academic and Professional",
        image: "media/images/clubs/linguistics-and-tesl-club.jpg",
        description:
            "Linguistics & TESL Club is an organization that provides a sense of community for students in the LING and TESL programs and acts as a resource for members to connect and develop linguistic competencies outside of the classroom.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "lucha-csun-latinos-unidos-for-change-hope-and-action-csun-chapter",
        name: "LUCHA - CSUN (Latinos Unidos for Change, Hope, and Action) - CSUN Chapter",
        shortName: "LCLUCHAC",
        category: "Cultural and Identity",
        image: "media/images/clubs/lucha-csun-latinos-unidos-for-change-hope-and-action-csun-chapter.jpg",
        description:
            "The purpose of LUCHA - CSUN is to foster an environment of good will, social awareness, societal change, and actionable events. LUCHA - CSUN exists as a protectorate and representative of the Latin@ community at California State University, Northridge.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "management-information-systems-association",
        name: "Management Information Systems Association",
        shortName: "MISA",
        category: "Business and Professional",
        image: "media/images/clubs/management-information-systems-association.jpg",
        description:
            "We are a student organization dedicated to empowering ambitious students as they transition from the classroom to industry professionals. We host weekly meetings and networking events with industry experts that enhance student education.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "mariachi-aztlan-nueva-generacion-de-chicana-o-studies-csun",
        name: "Mariachi Aztlan Nueva Generac\u00edon de Chicana/o Studies CSUN",
        shortName: "MANGCOSC",
        category: "Arts and Media",
        image: "media/images/clubs/mariachi-aztlan-nueva-generacion-de-chicana-o-studies-csun.jpg",
        description:
            "Mariachi Aztlan Nueva Generac\u00edon was reestablished in 2024 by CSUN students that play traditional Mexican music. We are open to all CSUN students. We practice in Jerome Richfield 118 on Fridays from 4-6pm. Instruments are not provided.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "marilyn-magaram-center",
        name: "Marilyn Magaram Center",
        shortName: "Marilyn Magaram Center",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/marilyn-magaram-center.jpg",
        description:
            "The Marilyn Magaram Center (MMC) is here to enhance and promote health and well-being through research, education and services in food science, nutrition and dietetics.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "marine-biology-graduate-student-association-mbgsa",
        name: "Marine Biology Graduate Student Association (MBGSA)",
        shortName: "MBG",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/marine-biology-graduate-student-association-mbgsa.jpg",
        description:
            "The purpose of the MBGSA is to enrich the academic lives of CSUN marine biology students through the discussion of recent scientific articles and by supporting student travel to academic conferences, lectures, and student seminars.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "master-of-public-health-student-association-mphsa",
        name: "Master of Public Health Student Association (MPHSA)",
        shortName: "MPHSA",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/master-of-public-health-student-association-mphsa.jpg",
        description:
            "Our mission is to serve, guide, empower and support Masters of Public Health (MPH) students by providing opportunities that foster both academic and professional growth",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "mata-improv-club",
        name: "Mata-Improv Club",
        shortName: "Mata-Improv Club",
        category: "Arts and Media",
        image: "media/images/clubs/mata-improv-club.jpg",
        description:
            "The Mata Improv Club is a club that meets to perform and practice Improvisational theatre. It is a fun club to destress, find community, build public speaking skills, and build skills improvisational skills for the performance arts.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "matador-boxing-team",
        name: "Matador Boxing Team",
        shortName: "Matador Boxing Team",
        category: "Sports and Recreation",
        image: "media/images/clubs/matador-boxing-team.jpg",
        description:
            "We accept anyone with or without experience. We recruit new members at the beginning of the Fall and Spring semesters at club events. If you have any questions, feel free to email us at boxing@csunas.org or follow our social media for any events, we do",
        email: "boxing@csunas.org",
        discord: "",
        socials: {}
    },
    {
        id: "matador-chess-club",
        name: "Matador Chess Club",
        shortName: "Matador Chess Club",
        category: "Arts and Media",
        image: "media/images/clubs/matador-chess-club.jpg",
        description:
            "The Matador Chess Club is a competitive chess organization located here at CSUN. Matador Chess Club strives to provide students with a platform to grow, strengthen and develop all aspects of their chess game. We invite all students to improve their game!",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "matador-women-in-business",
        name: "Matador Women in Business",
        shortName: "Matador Women in Business",
        category: "Business and Professional",
        image: "media/images/clubs/matador-women-in-business.jpg",
        description:
            "Matador Women in Business Club is a student-led organization that aims to empower a community of future female leaders, creating a space to connect and grow with each other.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "matador-women-s-soccer-club",
        name: "Matador Women's Soccer Club",
        shortName: "Matador Women's Soccer Club",
        category: "Sports and Recreation",
        image: "media/images/clubs/matador-women-s-soccer-club.jpg",
        description:
            "The Women's Soccer Club was founded in 2008 by a group of women who joined together for the passion of one sport- soccer. Since then the team has won 7 league titles, qualified for 3 regional tournaments and one national level tournament. The team curr...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "matadors4wellness",
        name: "Matadors4Wellness",
        shortName: "Matadors4Wellness",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/matadors4wellness.jpg",
        description:
            "The Matadors4Wellness Peer Health Educators are CSUN students who are committed to the health and wellness of the campus community.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "matasync-headquarters",
        name: "MataSync Headquarters",
        shortName: "MataSync Headquarters",
        category: "Campus Resources and Support",
        image: "media/images/clubs/matasync-headquarters.jpg",
        description:
            "Get help with MataSync.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "math-club-california-state-university-northridge",
        name: "Math Club, California State University, Northridge",
        shortName: "MCSUN",
        category: "Academic and Professional",
        image: "media/images/clubs/math-club-california-state-university-northridge.jpg",
        description:
            "The CSUN Math Club is a place where members can explore, appreciate, and engage in mathematics beyond the classroom. We hope to create a welcoming environment that connects students and faculty, and builds a sense of community within the math department.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "men-care-csun",
        name: "Men CARE, CSUN",
        shortName: "Men CARE, CSUN",
        category: "Cultural and Identity",
        image: "media/images/clubs/men-care-csun.jpg",
        description:
            "MenCARE (Creating Attitudes for Rape-Free Environments) is a campus-wide prevention program dedicated to ending sexual violence on campus through education, cultural change, and leadership development. MenCARE is a unique collaboration between Strength...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "mic-student-organizations",
        name: "MIC, Student Organizations",
        shortName: "MIC, Student Organizations",
        category: "Campus Resources and Support",
        image: "media/images/clubs/mic-student-organizations.jpg",
        description:
            "Welcome to the Student Organizations MataSync Portal for California State University, Northridge! CSUN students have almost 300 student organizations to choose from in a variety of categories.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "microbiology-students-association",
        name: "Microbiology Students Association",
        shortName: "Microbiology Students Association",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/microbiology-students-association.jpg",
        description:
            "The Microbiology Students Association is a nationally recognized student chapter of the American Society for Microbiology. We are dedicated to bringing you events that spark your passion for a variety of fields within microbiology.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "mindfulness-club-california-state-university-northridge-csun",
        name: "Mindfulness Club, California State University, Northridge (CSUN)",
        shortName: "MCSUN",
        category: "Service and Advocacy",
        image: "media/images/clubs/mindfulness-club-california-state-university-northridge-csun.jpg",
        description:
            "The Mindfulness Club fosters self-awareness, personal growth, and balance, offering a supportive space for stress management and inner peace. Our mission is to inspire positive transformation in individuals and the community.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "mixed-race-multicultural-club",
        name: "Mixed Race Multicultural Club",
        shortName: "Mixed Race Multicultural Club",
        category: "Cultural and Identity",
        image: "media/images/clubs/mixed-race-multicultural-club.jpg",
        description:
            "Mixed-Race Multicultural Club aims to create community and belonging for CSUN students who are mixed race, multiracial, and multicultural.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "movimiento-estudiantil-chicano-a-de-aztlan",
        name: "Movimiento Estudiantil Chicano/a de Aztl\u00e1n",
        shortName: "MECAAN",
        category: "Cultural and Identity",
        image: "media/images/clubs/movimiento-estudiantil-chicano-a-de-aztlan.jpg",
        description:
            "We\u2019re a Chicane community organization that aims to empower students through political action and sharing knowledge of Indigenous, Mexican-American, and Latine cultures.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "multicultural-psychological-association",
        name: "Multicultural Psychological Association",
        shortName: "Multicultural Psychological Associatio",
        category: "Cultural and Identity",
        image: "media/images/clubs/multicultural-psychological-association.jpg",
        description:
            "The focus of the Multicultural Psychological Association is to help students of all cultures navigate the psychological field and to provide an outlet for educational, personal, and social support.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "music-and-entertainment-student-association",
        name: "Music and Entertainment Student Association",
        shortName: "Music and Entertainment Student Associ",
        category: "Arts and Media",
        image: "media/images/clubs/music-and-entertainment-student-association.jpg",
        description:
            "MESA is a student ran and led organization that works to connect students with the Music and Entertainment Industry through networking, educational, and social events.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "music-therapy-association-of-northridge",
        name: "Music Therapy Association of Northridge",
        shortName: "MTN",
        category: "Arts and Media",
        image: "media/images/clubs/music-therapy-association-of-northridge.jpg",
        description:
            "The Music Therapy Association of Northridge (MTAN) aims to assist music therapy students in furthering their knowledge of the music therapy field and creating opportunities to succeed through guest speakers, events, presentations, and fundraising.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "muslim-student-association",
        name: "Muslim Student Association",
        shortName: "Muslim Student Association",
        category: "Religious and Spiritual",
        image: "media/images/clubs/muslim-student-association.jpg",
        description:
            "CSUNMSA is dedicated to voicing Muslim concerns on campus, increasing inclusivity of campus to Muslims by providing a community they can take part in, and providing educational resources to teach students about who Muslims are and what they stand for.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "mustard-seed-project",
        name: "Mustard Seed Project",
        shortName: "Mustard Seed Project",
        category: "Service and Advocacy",
        image: "media/images/clubs/mustard-seed-project.jpg",
        description:
            "Mustard Seed Project is a 501(c)(3) grassroots nonprofit with hundreds of college student volunteers nationwide. Every week, our teams take to the streets to provide homeless individuals with basic needs and valuable information about community services.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "national-association-for-music-education-collegiate-chapter",
        name: "National Association for Music Education Collegiate Chapter",
        shortName: "NMEC",
        category: "Arts and Media",
        image: "media/images/clubs/national-association-for-music-education-collegiate-chapter.jpg",
        description:
            "An organization that provides professional development and social activities for students interested in becoming music teachers or getting involved with music education. We are the CSUN Collegiate Chapter of the National Association for Music Education.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "national-association-of-black-journalists-nabj",
        name: "National Association of Black Journalists (NABJ)",
        shortName: "NABJ",
        category: "Cultural and Identity",
        image: "media/images/clubs/national-association-of-black-journalists-nabj.jpg",
        description:
            "",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "national-association-of-the-advancement-of-colored-people",
        name: "National Association of the Advancement of Colored People",
        shortName: "NACP",
        category: "Service and Advocacy",
        image: "media/images/clubs/national-association-of-the-advancement-of-colored-people.jpg",
        description:
            "founded in 1909 to eliminate racial discrimination and defend the rights of people of color through advocacy, legal action, and political engagement.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "national-pan-hellenic-council",
        name: "National Pan-Hellenic Council",
        shortName: "National Pan-Hellenic Council",
        category: "Academic and Professional",
        image: "media/images/clubs/national-pan-hellenic-council.jpg",
        description:
            "The National Pan-Hellenic Council is a collaborative organization of nine historically African American, international Greek lettered fraternities and sororities.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "national-society-of-black-engineers",
        name: "National Society of Black Engineers",
        shortName: "NSBE",
        category: "Cultural and Identity",
        image: "media/images/clubs/national-society-of-black-engineers.jpg",
        description:
            "The mission statement of the National Society of Black Engineers (NSBE) is to increase the number of culturally responsible Black engineers who excel academically, succeed professionally, and positively impact the community.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "national-society-of-collegiate-scholars",
        name: "National Society of Collegiate Scholars",
        shortName: "NCS",
        category: "Honor Society",
        image: "media/images/clubs/national-society-of-collegiate-scholars.jpg",
        description:
            "The National Society of Collegiate Scholars is a non-profit organization that welcomes and recognizes high academic achievement during students first and second year and for their lifetime.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "nazarian-business-and-economic-review",
        name: "Nazarian Business & Economic Review",
        shortName: "Nazarian Business & Economic Review",
        category: "Business and Professional",
        image: "media/images/clubs/nazarian-business-and-economic-review.jpg",
        description:
            "The Nazarian Business & Economic Review is an undergraduate, peer-reviewed, academic economics journal that serves as a resource for the community, enhancing understanding and promoting discussion on both business and economic topics.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "new-student-orientation",
        name: "New Student Orientation",
        shortName: "New Student Orientation",
        category: "Campus Resources and Support",
        image: "media/images/clubs/new-student-orientation.jpg",
        description:
            "Welcome Leaders!! MataSync is our new online interface that we will be utilizing during our time in NSO.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "new-student-orientation-service-fair-2019",
        name: "New Student Orientation Service Fair 2019",
        shortName: "NOSF",
        category: "Service and Advocacy",
        image: "media/images/clubs/new-student-orientation-service-fair-2019.jpg",
        description:
            "Introduce new students to campus services and resources.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "nigerian-student-association",
        name: "Nigerian Student Association",
        shortName: "Nigerian Student Association",
        category: "Arts and Media",
        image: "media/images/clubs/nigerian-student-association.jpg",
        description:
            "The Nigerian Student Association promotes community and honors Nigerian culture through gatherings that highlight cuisine, music, and customs. It welcomes any students interested in learning about Nigeria's culture and exploring networking opportunities.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "northridge-creative-writing-circle",
        name: "Northridge Creative Writing Circle",
        shortName: "Northridge Creative Writing Circle",
        category: "Arts and Media",
        image: "media/images/clubs/northridge-creative-writing-circle.jpg",
        description:
            "The Northridge Creative Writing Circle is an inclusive space for writers of all backgrounds to flourish and support one another.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "northridge-street-dancers",
        name: "Northridge Street Dancers",
        shortName: "Northridge Street Dancers",
        category: "Arts and Media",
        image: "media/images/clubs/northridge-street-dancers.jpg",
        description:
            "Founded in 2001, originally known as CSUN Hip Hop, Northridge Street Dancers has been creating a community through the shared passion of hip hop. In 2024, the name was changed to Northridge Street Dancers to reflect all of the street styles we partake in",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "oasis-wellness-center",
        name: "Oasis Wellness Center",
        shortName: "Oasis Wellness Center",
        category: "Service and Advocacy",
        image: "media/images/clubs/oasis-wellness-center.jpg",
        description:
            "Your Place to Relax, Revive and Succeed.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "office-of-student-involvement-and-development",
        name: "Office of Student Involvement and Development",
        shortName: "OID",
        category: "Service and Advocacy",
        image: "media/images/clubs/office-of-student-involvement-and-development.jpg",
        description:
            "The Office of Student Involvement and Development wants to help you face those challenges and take advantage of the opportunities. Staying involved and meeting other students is key when it comes to enjoying your time at CSUN.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "oviatt-library",
        name: "Oviatt Library",
        shortName: "Oviatt Library",
        category: "Campus Resources and Support",
        image: "media/images/clubs/oviatt-library.jpg",
        description:
            "",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "panhellenic-council-of-csu-northridge",
        name: "Panhellenic Council of CSU, Northridge",
        shortName: "Panhellenic Council of CSU, Northridge",
        category: "Fraternity and Sorority Life",
        image: "media/images/clubs/panhellenic-council-of-csu-northridge.jpg",
        description:
            "The word Panhellenic means \u201cAll Greek.\u201dThe Panhellenic council is the governing body of the seven sororities at CSUN. The purpose is to provide support and promote the growth of the chapters at CSUN. The success of Panhellenic lies solely in the unif...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "parent-scholars-resource-center",
        name: "Parent Scholars Resource Center",
        shortName: "Parent Scholars Resource Center",
        category: "Engineering and Technology",
        image: "media/images/clubs/parent-scholars-resource-center.jpg",
        description:
            "The Parent Scholars Resource Center (PSRC) is a new initiative funded by the CSUN Campus Quality Fee that aims to provide and connect services that support the academic journey of currently enrolled CSUN students who are also parents.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "parent-scholars-united",
        name: "Parent Scholars United",
        shortName: "Parent Scholars United",
        category: "Service and Advocacy",
        image: "media/images/clubs/parent-scholars-united.jpg",
        description:
            "This organization aims to provide members with the support, advocacy, resources, activities, and education needed to successfully balance life as a student and parent.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "peer-health-exchange",
        name: "Peer Health Exchange",
        shortName: "Peer Health Exchange",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/peer-health-exchange.jpg",
        description:
            "We are student volunteers that provide health workshops to underserved high schools in the LA area. We teach ninth graders comprehensive and inclusive health education that aid in improving their health, safety and decision making.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "phi-delta-theta-fraternity",
        name: "Phi Delta Theta Fraternity",
        shortName: "Phi Delta Theta Fraternity",
        category: "Fraternity and Sorority Life",
        image: "media/images/clubs/phi-delta-theta-fraternity.jpg",
        description:
            "",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "phi-lambda-rho-sorority-inc",
        name: "Phi Lambda Rho Sorority, Inc.",
        shortName: "Phi Lambda Rho Sorority, Inc.",
        category: "Fraternity and Sorority Life",
        image: "media/images/clubs/phi-lambda-rho-sorority-inc.jpg",
        description:
            "\"Phi Lambda Rho is a Chicana/Latina based sorority that continuously strives to fulfill four objectives: Academic Excellence, Community Service, Promotion of the Chicana/Latina culture, and Sisterhood.\"",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "phi-mu-fraternity",
        name: "Phi Mu Fraternity",
        shortName: "Phi Mu Fraternity",
        category: "Fraternity and Sorority Life",
        image: "media/images/clubs/phi-mu-fraternity.jpg",
        description:
            "Phi Mu was founded in 1852 at Wesleyan College in Macon, Ga. and is the second oldest sorority in the nation. We have provided social opportunities, a support network, and personal enrichment resources to members for over 160 years. In that time over 1...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "pi-kappa-alpha",
        name: "Pi Kappa Alpha",
        shortName: "Pi Kappa Alpha",
        category: "Academic and Professional",
        image: "media/images/clubs/pi-kappa-alpha.jpg",
        description:
            "PIKE recruits men that exemplify the four pillars of Scholars, Leaders, Athletes, and Gentlemen. We look for men who are committed to academic success, campus and community leadership, possess a competitive drive, and desire to treat others with respect.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "police-services",
        name: "Police Services",
        shortName: "Police Services",
        category: "Service and Advocacy",
        image: "media/images/clubs/police-services.jpg",
        description:
            "",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "portfolium",
        name: "Portfolium",
        shortName: "Portfolium",
        category: "Arts and Media",
        image: "media/images/clubs/portfolium.jpg",
        description:
            "Portfolium is CSUN's leading ePortfolio resource to help students enhance their online presence and showcase their work like never before - in a digital format aimed at improving their chances of landing their dream job! Tell your story and share your ...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "pre-dental-club",
        name: "Pre-Dental Club",
        shortName: "Pre-Dental Club",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/pre-dental-club.jpg",
        description:
            "Hello, and welcome to CSUN Pre-Dental Club. PDC's mission is to inform and assist members throughout their pre-dental careers at CSUN. We strive to provide information regarding the application process, the DAT, and various specialties within dentistry.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "pre-law-association",
        name: "Pre-Law Association",
        shortName: "Pre-Law Association",
        category: "Business and Professional",
        image: "media/images/clubs/pre-law-association.jpg",
        description:
            "The Pre-Law Association is for students who are interested in law and/or wish to continue onto law school while meeting and expanding their understanding of the world of law from LSAT prep, attorney guest speakers, law school tours, and much more!",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "pre-med-club",
        name: "Pre-Med Club",
        shortName: "Pre-Med Club",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/pre-med-club.jpg",
        description:
            "Pre-Med Club is an organization focused on helping pre-medical students navigate the rigorous requirements needed for medical school, as well as form connections and build experience during their undergraduate years.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "pre-optometry-club",
        name: "Pre-Optometry Club",
        shortName: "Pre-Optometry Club",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/pre-optometry-club.jpg",
        description:
            "Our mission is to provide CSUN students with educational resources, professional development opportunities, and community connections that foster a deeper understanding of the optometric field.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "pre-pharmacy-club",
        name: "Pre-Pharmacy Club",
        shortName: "Pre-Pharmacy Club",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/pre-pharmacy-club.jpg",
        description:
            "Our mission is to provide CSUN Pre-Pharmacy students with the tools necessary to pursue the pharmacy field by providing speakers from pharmacy schools, field trips to pharmacy schools, peer mentorship, informational meetings, and volunteer opportunities.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "pre-physician-assistant-club",
        name: "Pre-Physician Assistant Club",
        shortName: "Pre-Physician Assistant Club",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/pre-physician-assistant-club.jpg",
        description:
            "The purpose of the Pre-Physician Assistant Club at CSUN is to educate students with the Physician Assistant profession and the admission process through informational sessions, guest speakers, and community service opportunities; all of which that will...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "pre-podiatry-club",
        name: "Pre-Podiatry Club",
        shortName: "Pre-Podiatry Club",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/pre-podiatry-club.jpg",
        description:
            "The Pre-Podiatry Club is a student organization dedicated to exploring the field of podiatric medicine through guest speakers, volunteer opportunities, and providing members with relevant information about the profession.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "pride-center",
        name: "Pride Center",
        shortName: "Pride Center",
        category: "Campus Resources and Support",
        image: "media/images/clubs/pride-center.jpg",
        description:
            "USU Pride Center",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "project-d-a-t-e",
        name: "Project D.A.T.E.",
        shortName: "Project D.A.T.E.",
        category: "Service and Advocacy",
        image: "media/images/clubs/project-d-a-t-e.jpg",
        description:
            "Project D.A.T.E. is a rape and sexual assault awareness and prevention program sponsored by University Counseling Services and Strength United. Strength United is a community based, and university affiliated, sexual assault intervention and violence pr...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "psi-chi-the-international-honor-society-in-psychology",
        name: "Psi Chi The International Honor Society in Psychology",
        shortName: "PCIHP",
        category: "Honor Society",
        image: "media/images/clubs/psi-chi-the-international-honor-society-in-psychology.jpg",
        description:
            "Psi Chi is an internationally recognized honor society founded in 1929 for the subject of psychology. Our chapter helps students with professional development and networking opportunities. See more in our full description!",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "public-relations-student-society-of-america",
        name: "Public Relations Student Society of America",
        shortName: "PRSSA",
        category: "Business and Professional",
        image: "media/images/clubs/public-relations-student-society-of-america.jpg",
        description:
            "We aspire to advance our members into the world of public relations by broadening their networks with PR professionals from various industries and enhancing their skills through our Chapters\u2019 benefits!",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "python-club",
        name: "Python Club",
        shortName: "Python Club",
        category: "Engineering and Technology",
        image: "media/images/clubs/python.jpg",
        description:
            "Creating a community of students who have an interest in Python programming. The purpose of this club is to provide an education to those who seek an mastery of Python\u2019s fundamental functions.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "queer-coalition-of-social-workers",
        name: "Queer Coalition of Social Workers",
        shortName: "Queer Coalition of Social Workers",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/queer-coalition-of-social-workers.jpg",
        description:
            "Queer Coalition of Social Workers (QCSW) is open to all of the CSUN community. We host discussions, activities & learning. We produce educational content, honor queer history & conduct advocacy, around LGBTQIA2S+ identities & their intersections.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "radiologic-sciences-student-association",
        name: "Radiologic Sciences Student Association",
        shortName: "Radiologic Sciences Student Associatio",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/radiologic-sciences-student-association.jpg",
        description:
            "The Radiologic Sciences Student Association (RSSA) has two main goals as a club:#1 - GIVE BACK! We are a club dedicated to our local community and patient population through service activities and participation in the community. #2 \u2013 MENTOR! We are a...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "reach-csun",
        name: "REACH CSUN",
        shortName: "REACH CSUN",
        category: "Business and Professional",
        image: "media/images/clubs/reach-csun.jpg",
        description:
            "CSUN\u2019s community for aspiring content creators, social media marketers, and digital entrepreneurs. Join us to connect with peers, gain industry insights from guest speakers, and build your personal brand through collaborative workshops and other events.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "research-and-sponsored-programs",
        name: "Research & Sponsored Programs",
        shortName: "Research & Sponsored Programs",
        category: "Campus Resources and Support",
        image: "media/images/clubs/research-and-sponsored-programs.jpg",
        description:
            "Research and Graduate Studies",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "residence-hall-association",
        name: "Residence Hall Association",
        shortName: "Residence Hall Association",
        category: "Service and Advocacy",
        image: "media/images/clubs/residence-hall-association.jpg",
        description:
            "The Residence Halls Association (RHA) is an organization of dedicated residents acting as agents of opportunity to promote a healthy academic and social environment while voicing the concerns of the community. RHA is the umbrella organization for all s...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "returning-students-alliance",
        name: "Returning Students Alliance",
        shortName: "Returning Students Alliance",
        category: "Academic and Professional",
        image: "media/images/clubs/returning-students-alliance.jpg",
        description:
            "This organization is formed to create a supportive community for students returning to CSUN after a prolonged absence. The organization will provide returning students with any type of support they may need while navigating their return to college.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "revolutionary-scholars",
        name: "Revolutionary Scholars",
        shortName: "Revolutionary Scholars",
        category: "Service and Advocacy",
        image: "media/images/clubs/revolutionary-scholars.jpg",
        description:
            "Revolutionary Scholars creates a pathway for formerly incarcerated and system impacted individuals into higher education. We are building a prison-to-school pipeline through recruitment, retention, and advocacy. Our continued success directly challenge...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "salsa-libre",
        name: "Salsa Libre",
        shortName: "Salsa Libre",
        category: "Arts and Media",
        image: "media/images/clubs/salsa-libre.jpg",
        description:
            "Salsa Libre is California State University Northridge exclusive Salsa based team. Since its formation in 2007, Salsa Libre has given birth to prosperous generations of dancers who have and continue to gain a reputable status in the dance community thro...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "screenwriters-club",
        name: "Screenwriters Club",
        shortName: "Screenwriters Club",
        category: "Arts and Media",
        image: "media/images/clubs/screenwriters-club.jpg",
        description:
            "The Screenwriters Club of California State University, Northridge aims to aid screenwriters in developing their craft through discussion and feedback, and by fostering relationships based on a mutual interest in writing for the screen.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "senas-unidas",
        name: "Se\u00f1as Unidas",
        shortName: "Se\u00f1as Unidas",
        category: "Cultural and Identity",
        image: "media/images/clubs/senas-unidas.jpg",
        description:
            "Se\u00f1as Unidas is a student club at CSUN for Deaf/ hard-of-hearing folks and allies. We aim to unite and provide support and offering a space with Latin backgrounds, creating friendships, intertwine, and celebrate Deaf and Latin communities simultaneously.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "sigma-omega-nu-latina-interest-sorority-inc",
        name: "Sigma Omega Nu Latina Interest Sorority Inc.",
        shortName: "SONLIS",
        category: "Fraternity and Sorority Life",
        image: "media/images/clubs/sigma-omega-nu-latina-interest-sorority-inc.jpg",
        description:
            "Sigma Omega Nu Latina Interest Sorority, Inc. was established at Cal Poly San Luis Obispo by eight young women as a way to unite and involve its members in a bond of sisterhood through cultural, academic and social means.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "sigma-phi-epsilon",
        name: "Sigma Phi Epsilon",
        shortName: "Sigma Phi Epsilon",
        category: "Academic and Professional",
        image: "media/images/clubs/sigma-phi-epsilon.jpg",
        description:
            "Our core principles consist of Virtue, Diligence, and Brotherly Love",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "sigma-tau-delta-iota-chi-english-honor-society",
        name: "Sigma Tau Delta Iota Chi (English Honor Society)",
        shortName: "Sigma Tau Delta Iota Chi",
        category: "Honor Society",
        image: "media/images/clubs/sigma-tau-delta-iota-chi-english-honor-society.jpg",
        description:
            "Sigma Tau Delta Iota Chi is CSUN's chapter of the International English Honor Society. As an honor society, we strive to promote interest in literature, promote exemplary character and good fellowship among its members, and exhibit high standards of ac...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "sikh-student-association",
        name: "Sikh Student Association",
        shortName: "Sikh Student Association",
        category: "Religious and Spiritual",
        image: "media/images/clubs/sikh-student-association.jpg",
        description:
            "The Sikh Student Association promotes Sikh ideologies and unity, sharing beliefs, offering community service, and creating an inclusive community for campus Sikhs and non-Sikhs. They uphold four key principles: Seva, Simran, Sangat, and Academics.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "social-work-society",
        name: "Social Work Society",
        shortName: "Social Work Society",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/social-work-society.jpg",
        description:
            "The function of SWS is to provide all MSW students with networking, leadership, and professional development opportunities that will enhance social work skills.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "society-of-automotive-engineers-sae",
        name: "Society of Automotive Engineers (SAE)",
        shortName: "SAE",
        category: "Engineering and Technology",
        image: "media/images/clubs/society-of-automotive-engineers-sae.jpg",
        description:
            "Society of Automotive Engineers (SAE) Senior Design Project for Mechanical Engineering undergraduate students.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "society-of-entertainment-industry-management",
        name: "Society of Entertainment Industry Management",
        shortName: "EIM",
        category: "Arts and Media",
        image: "media/images/clubs/society-of-entertainment-industry-management.jpg",
        description:
            "The SEIM is here to explore and promote academic and career opportunities, address issues related to the field of entertainment industry management, and foster community among individuals interested in this field beyond the classroom.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "society-of-hispanic-professional-engineers-csun",
        name: "Society of Hispanic Professional Engineers - CSUN",
        shortName: "SHPE CSUN",
        category: "Arts and Media",
        image: "media/images/clubs/society-of-hispanic-professional-engineers-csun.jpg",
        description:
            "SHPE CSUN is a part of a nationally recognized professional society that provides an environment which fosters familia , academia, and professionalism. Through the help of a strong social network, diverse interdisciplinary membership, and industry lead...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "society-of-physics-students-northridge-chapter",
        name: "Society of Physics Students-Northridge Chapter",
        shortName: "Society of Physics Students-Northridge",
        category: "Engineering and Technology",
        image: "media/images/clubs/society-of-physics-students-northridge-chapter.jpg",
        description:
            "Society of Physics Students - Northridge Chapter is a part of a nation-wide organization. Our aim is to bring together those who are studying or have an interest in physics and bring attention to the physics community at CSUN.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "society-of-software-engineers",
        name: "Society of Software Engineers",
        shortName: "Society of Software Engineers",
        category: "Engineering and Technology",
        image: "media/images/clubs/society-of-software-engineers.jpg",
        description:
            "The Society of Software Engineers builds community, fosters skill growth, and connects students with peers and industry through projects, events, and mentorship, preparing members for success in software engineering.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "society-of-women-engineers",
        name: "Society of Women Engineers",
        shortName: "SWE",
        category: "Academic and Professional",
        image: "media/images/clubs/society-of-women-engineers.jpg",
        description:
            "CSUN SWE seems to encourage women to achieve their full potential in careers as engineers and leaders and demonstrate the value of diversity in STEM field.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "sociology-club",
        name: "Sociology Club",
        shortName: "Sociology Club",
        category: "Religious and Spiritual",
        image: "media/images/clubs/sociology-club.jpg",
        description:
            "The Sociology club aims to promote leadership, unity, fellowship, and inclusivity among students that are interested in sociology and sociological issues.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "soon-movement-global",
        name: "Soon Movement Global",
        shortName: "Soon Movement Global",
        category: "Religious and Spiritual",
        image: "media/images/clubs/soon-movement-global.jpg",
        description:
            "SOON Movement Global is a non-profit missionary order committed to spreading the life-changing Gospel of Jesus Christ to every campus, community, and nation as a member of the global movement of Campus Crusade for Christ International.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "spectrum-and-friends",
        name: "Spectrum and Friends",
        shortName: "Spectrum and Friends",
        category: "Academic and Professional",
        image: "media/images/clubs/spectrum-and-friends.jpg",
        description:
            "Spectrum and Friends is a club dedicated to students who are either diagnosed or self-identifying as neurodivergent and ally neurotypical students. We are a club dedicated to community, education, and resources for Neurodiverse students.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "strength-united",
        name: "Strength United",
        shortName: "Strength United",
        category: "Service and Advocacy",
        image: "media/images/clubs/strength-united.jpg",
        description:
            "The Campus Care Advocates are a confidential and free resource on campus for students, faculty, and staff who have experienced sexual violence, relationship abuse, domestic violence or harassment/stalking. We provide individual and group counseling servi",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "student-association-for-behavior-analysis",
        name: "Student Association for Behavior Analysis",
        shortName: "Student Association for Behavior Analy",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/student-association-for-behavior-analysis.jpg",
        description:
            "The mission of SABA is to promote educational and professional advancement for all students interested in behavior analysis. We are dedicated to disseminating behavior analysis and creating opportunities to facilitate students\u2019 scholastic success.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "student-association-of-school-psychology",
        name: "Student Association of School Psychology",
        shortName: "Student Association of School Psycholo",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/student-association-of-school-psychology.jpg",
        description:
            "The Student Association of School Psychology (SASP) at CSUN is a group for graduate students, alumni, and interested peers in the Michael D. Eisner College of Education, Department of Educational Psychology and Counseling, School Psychology program.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "student-philosophical-society",
        name: "Student Philosophical Society",
        shortName: "Student Philosophical Society",
        category: "Academic and Professional",
        image: "media/images/clubs/student-philosophical-society.jpg",
        description:
            "The Student Philosophical Society (SPS) is a place for students to engage in open, collaborative discussion about the philosophical topics that interest them with their peers, and with support from the faculty.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "student-veteran-organization",
        name: "Student Veteran Organization",
        shortName: "Student Veteran Organization",
        category: "Service and Advocacy",
        image: "media/images/clubs/student-veteran-organization.jpg",
        description:
            "Founded November 11, 2008 at California State University, Northridge. The CSUN chapter of the Student Veterans of America\u00ae (SVA) national, nonprofit organization. We aim to give help student veterans thrive through a well-rounded college experience.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "sustainable-business-club",
        name: "Sustainable Business Club",
        shortName: "Sustainable Business Club",
        category: "Business and Professional",
        image: "media/images/clubs/sustainable-business-club.jpg",
        description:
            "The Sustainable Business Club is dedicated to promoting sustainable businesses that utilize low cost practices and efficient ways of making, spending and saving money.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "take",
        name: "TAKE",
        shortName: "TAKE",
        category: "Academic and Professional",
        image: "media/images/clubs/take.jpg",
        description:
            "",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "tau-beta-pi-the-engineering-honor-society",
        name: "Tau Beta Pi The Engineering Honor Society",
        shortName: "TBPEH",
        category: "Honor Society",
        image: "media/images/clubs/tau-beta-pi-the-engineering-honor-society.jpg",
        description:
            "Tau Beta Pi is the engineering honor society representing the entire engineering profession. Being the second oldest honor society, it recognizes students of distinguished scholarship and exemplary character.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "tau-omega-rho-fraternity",
        name: "Tau Omega Rho Fraternity",
        shortName: "Tau Omega Rho Fraternity",
        category: "Fraternity and Sorority Life",
        image: "media/images/clubs/tau-omega-rho-fraternity.jpg",
        description:
            "\u03a4\u03a9\u03a1 - Founding Chapter Established April 28, 2009Brothers.Scholars.Athletes.Philanthropists. The mission of Tau Omega Rho is to unite students for a stronger sense of involvement within the California State University, Northridge community, through the...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "the-blues-project",
        name: "The Blues Project",
        shortName: "The Blues Project",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/the-blues-project.jpg",
        description:
            "A mental health organization dedicated to bringing awareness to depression and suicide prevention.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "the-csun-matador-band",
        name: "The CSUN Matador Band",
        shortName: "The CSUN Matador Band",
        category: "Arts and Media",
        image: "media/images/clubs/the-csun-matador-band.jpg",
        description:
            "The CSUN Matador Band is a student-run organization where members from all major and backgrounds can continue playing music in a college setting. The band performs at CSUN's athletic events and is self sustained through member dues and other fundraisers.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "the-elohists",
        name: "The Elohists",
        shortName: "The Elohists",
        category: "Religious and Spiritual",
        image: "media/images/clubs/the-elohists.jpg",
        description:
            "We are a World Wide club and organization that believes in both God the Father and God the Mother. We hope to spread the Love and Wisdom of God, particularly about the existence of Heavenly Mother , God The Mother, that is testified in the Bible, the i...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "the-law-and-ethos-society",
        name: "The Law & Ethos Society",
        shortName: "The Law & Ethos Society",
        category: "Business and Professional",
        image: "media/images/clubs/the-law-and-ethos-society.jpg",
        description:
            "The Law & Ethos Society (LES) is a forum dedicated to thoughtful, roundtable discussions at the intersection of law, ethics, and current events.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "the-lesbian-and-sapphic-at-csun-club",
        name: "The Lesbian and Sapphic at CSUN Club",
        shortName: "The Lesbian and Sapphic at CSUN Club",
        category: "Academic and Professional",
        image: "media/images/clubs/the-lesbian-and-sapphic-at-csun-club.jpg",
        description:
            "A supportive, inclusive community that uplifts lesbian and sapphic students at CSUN by fostering authentic connection, identity affirmation, and social belonging through events and club meets.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "the-student-academy-of-audiology-california-state-university-northridge-csun-chapter",
        name: "The Student Academy of Audiology, California State University, Northridge (CSUN) Chapter",
        shortName: "Student Academy of Audiology",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/the-student-academy-of-audiology-california-state-university-northridge-csun-chapter.jpg",
        description:
            "This SAA Chapter will serve as a collective voice for students pursuing careers in audiology. Our mission is to promote and advance the profession of audiology, and provide education and services to the public we serve.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "the-sundial",
        name: "The Sundial",
        shortName: "The Sundial",
        category: "Academic and Professional",
        image: "media/images/clubs/the-sundial.jpg",
        description:
            "The Sundial is an award-winning, and financially independent, student newspaper. We are student journalists who seek to gather, write, edit and publish or disseminate news for our students and community. We want to connect with our audience both online...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "themed-entertainment-association",
        name: "Themed Entertainment Association",
        shortName: "Themed Entertainment Association",
        category: "Engineering and Technology",
        image: "media/images/clubs/themed-entertainment-association.jpg",
        description:
            "Our club\u2019s mission is to connect students with the themed entertainment industry through professional development, networking, and educational opportunities with a focus on both the engineering and business aspects that drive the industry.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "time-place-and-manner",
        name: "Time, Place & Manner",
        shortName: "Time, Place & Manner",
        category: "Campus Resources and Support",
        image: "media/images/clubs/time-place-and-manner.jpg",
        description:
            "The Time, Place and Manner portal is the center for student clubs to reserve outdoor spaces and promote their organizations on campus. This includes tabling, distributing flyers, selling products/food for fundraising, and more!",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "tourism-hospitality-and-recreation-management-association",
        name: "Tourism, Hospitality, and Recreation Management Association",
        shortName: "THRMA",
        category: "Business and Professional",
        image: "media/images/clubs/tourism-hospitality-and-recreation-management-association.jpg",
        description:
            "The THRMA Club advances tourism, hospitality, and recreation through experiential learning, mentorship, and industry connections, fostering leadership, innovation, and a collaborative, inclusive community for academic and professional success.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "trans-wellness-alliance",
        name: "Trans Wellness Alliance",
        shortName: "Trans Wellness Alliance",
        category: "Cultural and Identity",
        image: "media/images/clubs/trans-wellness-alliance.jpg",
        description:
            "CSUN Trans Wellness Alliance welcomes everyone from the trans spectrum, providing a safe space for allies to advocate for trans rights.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "transfer-student-alliance",
        name: "Transfer Student Alliance",
        shortName: "Transfer Student Alliance",
        category: "Service and Advocacy",
        image: "media/images/clubs/transfer-student-alliance.jpg",
        description:
            "We want to create a community that supports and guides transfer students\u2019 transition to CSUN in an effort to offset the disadvantages that transfer students face when entering CSUN for the first time. Join our Discord!",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "trends",
        name: "TRENDS",
        shortName: "TRENDS",
        category: "Arts and Media",
        image: "media/images/clubs/trends.jpg",
        description:
            "TRENDS is a non-profit, student-run organization at California State University Northridge (CSUN) that helps all students who are interested in fashion gain the knowledge and preparation needed to work in the fashion industry.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "turning-point-usa-at-california-state-university-northridge",
        name: "Turning Point Usa at California State University Northridge",
        shortName: "TPUCSUN",
        category: "Academic and Professional",
        image: "media/images/clubs/turning-point-usa-at-california-state-university-northridge.jpg",
        description:
            "TPUSA is a 501(c)3 non-profit organization whose mission is to identify, educate, train, and organize students to promote freedom.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "undergraduate-marine-bio-club",
        name: "Undergraduate Marine Bio Club",
        shortName: "Undergraduate Marine Bio Club",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/undergraduate-marine-bio-club.jpg",
        description:
            "The Undergraduate Marine Biology Club (UMBC) connects students through marine science events, research opportunities, and conservation projects while building a community for anyone passionate about the ocean.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "unified-we-serve",
        name: "Unified We Serve",
        shortName: "Unified We Serve",
        category: "Academic and Professional",
        image: "media/images/clubs/unified-we-serve.jpg",
        description:
            "",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "united-sorority-and-fraternity-council",
        name: "United Sorority & Fraternity Council",
        shortName: "United Sorority & Fraternity Council",
        category: "Fraternity and Sorority Life",
        image: "media/images/clubs/united-sorority-and-fraternity-council.jpg",
        description:
            "The United Sorority and Fraternity Council is currently made up of 12 multicultural Greek organizations. The purpose of the USFC is to assist and provide the change makers of tomorrow with the necessary",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "university-ambassadors",
        name: "University Ambassadors",
        shortName: "University Ambassadors",
        category: "Service and Advocacy",
        image: "media/images/clubs/university-ambassadors.jpg",
        description:
            "The University Ambassadors (UA) is a professional, volunteer group of CSUN students that give campus tours to all prospective students and their families. The UA is an official program within the CSUN Department of Student Outreach and Recruitment whos...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "university-counseling-services",
        name: "University Counseling Services",
        shortName: "University Counseling Services",
        category: "Health and Pre-Professional",
        image: "media/images/clubs/university-counseling-services.jpg",
        description:
            "University Counseling Services (UCS) is a mental health center for students enrolled at California State University, Northridge (CSUN).",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "university-student-union-usu",
        name: "University Student Union (USU)",
        shortName: "University Student Union",
        category: "Cultural and Identity",
        image: "media/images/clubs/university-student-union-usu.jpg",
        description:
            "",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "usu-reservations-and-events-services",
        name: "USU Reservations and Events Services",
        shortName: "USU Reservations and Events Services",
        category: "Service and Advocacy",
        image: "media/images/clubs/usu-reservations-and-events-services.jpg",
        description:
            "",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "vex-robotics-club",
        name: "VEX Robotics Club",
        shortName: "VEX Robotics Club",
        category: "Engineering and Technology",
        image: "media/images/clubs/vex-robotics-club.jpg",
        description:
            "The Matabots are a collective group of motivated individuals who come from a variety of educational backgrounds all with a common interest in mind: love for science and engineering. Our main purpose is design, program, and prepare robots that will comp...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "vietnamese-student-association",
        name: "Vietnamese Student Association",
        shortName: "Vietnamese Student Association",
        category: "Cultural and Identity",
        image: "media/images/clubs/vietnamese-student-association.jpg",
        description:
            "VSA strives to shed light on unique cultural experiences by educating our peers on the history of Vietnam, its rich culture, and its diverse people. We aim to equip members with the skills and resources to stand with other marginalized communities.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "vocal-percussion-radio",
        name: "Vocal Percussion Radio",
        shortName: "Vocal Percussion Radio",
        category: "Business and Professional",
        image: "media/images/clubs/vocal-percussion-radio.jpg",
        description:
            "Vocal Percussion Radio is an a cappella group at CSUN that holds biannual concerts, weekly on-campus performances, off-campus performances, and weekly rehearsals. We hold auditions at the beginning of every semester and consist of vocalists from divers...",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "women-in-animation-csun",
        name: "Women In Animation CSUN",
        shortName: "WIA CSUN",
        category: "Arts and Media",
        image: "media/images/clubs/women-in-animation-csun.jpg",
        description:
            "WIA CSUN Student Collective is dedicated to empowering women (cis and trans) and nonbinary students who want to enter the animation industry.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "women-s-research-and-resource-center",
        name: "Women's Research & Resource Center",
        shortName: "Women's Research & Resource Center",
        category: "Service and Advocacy",
        image: "media/images/clubs/women-s-research-and-resource-center.jpg",
        description:
            "The Women's Research and Resource Center, supported by the College of Humanities and Associated Students, serves as a place where students on campus and in the community can find resources and services related to needs common among students.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "young-life",
        name: "Young Life",
        shortName: "Young Life",
        category: "Religious and Spiritual",
        image: "media/images/clubs/young-life.jpg",
        description:
            "CSUN Young Life is an all inclusive club designed to create the best college experience possible for every student. We are built on three core values: Community, Adventure and Purpose.",
        email: "",
        discord: "",
        socials: {}
    },
    {
        id: "zeta-phi-beta-sorority-incorporated",
        name: "Zeta Phi Beta Sorority, Incorporated",
        shortName: "Zeta Phi Beta Sorority, Incorporated",
        category: "Fraternity and Sorority Life",
        image: "media/images/clubs/zeta-phi-beta-sorority-incorporated.jpg",
        description:
            "Omega Kappa Chapter of Zeta Phi Beta Sorority, Inc. is rooted in scholarship, service, sisterhood, and finer womanhood, uplifting our campus and community while cultivating women of integrity, leadership, and lasting impact",
        email: "",
        discord: "",
        socials: {}
    }
];

// ====== 2. Helper: build a single club card element ======

function createClubCard(club) {
    const article = document.createElement("article");
    article.classList.add("club-card");
    article.setAttribute("data-category", club.category);
    article.setAttribute("data-id", club.id);

    article.innerHTML = `
    <div class="club-image-wrapper">
      <img src="${club.image}" alt="${club.name}">
    </div>
    <div class="club-content">
      <h3 class="club-title">${club.shortName || club.name}</h3>
      <p class="club-description">
        ${club.description || ""}
      </p>
      <div class="club-links">
        ${club.email ? `<p><strong>Email:</strong> <a href="mailto:${club.email}">${club.email}</a></p>` : ""}
        ${club.discord ? `<p><strong>Discord:</strong> <a href="${club.discord}" target="_blank" rel="noopener">Join server</a></p>` : ""}
        ${renderSocialLinks(club.socials)}
      </div>
    </div>
  `;

    return article;
}

function renderSocialLinks(socials = {}) {
    const { instagram, twitter, x, website, twitch } = socials;
    const twitterOrX = x || twitter;

    const bits = [];

    if (instagram) {
        bits.push(
            `<a href="${instagram}" target="_blank" rel="noopener" class="club-social club-social-instagram">Instagram</a>`
        );
    }
    if (twitterOrX) {
        bits.push(
            `<a href="${twitterOrX}" target="_blank" rel="noopener" class="club-social club-social-twitter">X / Twitter</a>`
        );
    }
    if (twitch) {
        bits.push(
            `<a href="${twitch}" target="_blank" rel="noopener" class="club-social club-social-twitch">Twitch</a>`
        );
    }
    if (website) {
        bits.push(
            `<a href="${website}" target="_blank" rel="noopener" class="club-social club-social-website">Website</a>`
        );
    }

    if (!bits.length) return "";

    return `
    <p class="club-socials">
      <strong>Socials:</strong>
      ${bits.join(" • ")}
    </p>
  `;
}

// ====== 3. Render clubs grouped by category ======

function renderClubsByCategory(clubsData) {
    const root = document.getElementById("clubs-root");
    if (!root) return;

    // Group clubs by category
    const byCategory = clubsData.reduce((acc, club) => {
        if (!acc[club.category]) acc[club.category] = [];
        acc[club.category].push(club);
        return acc;
    }, {});

    // Clear existing content
    root.innerHTML = "";

    // For each category, create a section
    Object.keys(byCategory).forEach((categoryName) => {
        const section = document.createElement("section");
        section.classList.add("club-category");

        const header = document.createElement("header");
        header.classList.add("major");
        header.innerHTML = `<h2>${categoryName}</h2>`;
        section.appendChild(header);

        const grid = document.createElement("div");
        grid.classList.add("club-grid"); // you style this as a grid/tiles

        byCategory[categoryName].forEach((club) => {
            const card = createClubCard(club);
            grid.appendChild(card);
        });

        section.appendChild(grid);
        root.appendChild(section);
    });
}

// ====== 4. Kick everything off once DOM is ready ======

document.addEventListener("DOMContentLoaded", () => {
    renderClubsByCategory(clubs);
});
