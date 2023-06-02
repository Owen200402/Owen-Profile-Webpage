// Preloader setting
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// Add fixed nav when scrolling
const navbar = document.getElementById("nav_styles");
const header = document.getElementById("header_styles");
const nav_container = document.getElementById("nav-container");
const toggler_button = document.getElementById("toggler");
const social_media_icons = document.getElementsByClassName("social-icons");

scrolling();

// Scrolling event
function scrolling() {
  let click = false;
  toggler_button.addEventListener("click", function () {
    if (click == false) {
      click = true;
    } else {
      click = false;
    }
  });
  window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const heightSum =
      // getBoundingClientRect()： returns size of an element relative to the
      // viewport (Responsive Design)
      navbar.getBoundingClientRect().height +
      header.getBoundingClientRect().height;

    if (scrollHeight > heightSum && this.window.innerWidth >= 1024) {
      if (click == false) {
        toggler_button.click();
        click = true;
      }
      navbar.style.position = "fixed";
      navbar.style.top = "40%";
      navbar.style.width = "8.8rem";
      navbar.classList.remove("navbar-expand-lg");
      navbar.classList.add("flex-column");
      nav_container.classList.remove("container-fluid");
      displayChevron(scrollHeight);
    } else {
      if (click == true) {
        toggler_button.click();
        click = false;
      }
      navbar.style.position = "relative";
      navbar.style.top = "0%";
      navbar.style.width = "100%";
      navbar.classList.remove("flex-column");
      navbar.classList.add("navbar-expand-lg");
      nav_container.classList.add("container-fluid");
      displayChevron(scrollHeight);
    }
  });

  // displays back-to-top icon in biography
  function displayChevron(scrollHeight) {
    const icon = document.querySelector(".icon__container");
    if (scrollHeight > 1000) {
      icon.classList.add("icon__display");
    } else {
      icon.classList.remove("icon__display");
    }
  }
}

// Change top content For Biography:

let switched = false;
document.querySelector("#switch-bttn").onclick = function () {
  if (switched === false) {
    document.querySelector(".article_block2").innerHTML = `<div
  class="animate__animated animate__bounceInUp p_animate p_duration1"
  id="paragraph_1"
>
  <h2>
    First-Year UBCer
    <span class="font_color1 font_margin"
      ><i class="fas fa-solid fa-school fa-2x"></i></span>
  </h2>
  <section class="create_new">
    <p>
      I finally became a student in UBC in 2022. Lots of emotions bursts into my
      mind as I said goodbye to my parents, and I realized, it was the day
      leaving from my parents. From then on, I got to face challenges in my life
      alone. Although sounding scary, I longed for a self-designed university
      life, which, to me, symbolized freedom! Thanks UBC for organiing Jumpstart
      program, in which I made tons of friends that I kept contact with today.
      University life should not have a bad rep, which most of people think of,
      as if idiots cramming bugs all day in front of books and laptops. Overall,
      2023 was filled with fruits; I not only successfully acheived straight As,
      steped my foot into the world of computing, but also found my exclusive love
      (photos of me and my girlfriend are attached in photos section of the page by the way).
    </p>
  </section>
</div>
<div
  class="animate__animated animate__bounceInUp p_animate p_duration2"
  id="paragraph_2"
>
  <h2>
    2023 CS Projects
    <span class="font_color2 font_margin">
      <i class="fas fa-solid fa-laptop-code fa-2x"></i>
    </span>
  </h2>
  <section class="create_new">
    <p>
      Within my first-year studying, I have made 2 more computer science projects in
      classes. One of which is a java project that simulates a rating system for
      UBC libraries to give insights to new students as to which library would
      best suit their location, studying, and environment needs. All designs are
      made by myself and here is the link to its github repository: <br />
      <a href="https://github.com/Owen200402/RateMyLibraries" target="_blank"
        >Rate My Libraries</a
      >
      <br />
      Another project was made in my data science class, in which we trained our
      model in order to classify if a patient has got a benign or malignant
      tumor, and acheived a 72% success rate given unknown datasets. Here is the
      link:
      <br />
      <a
        href="https://github.com/Owen200402/TumorClassification"
        target="_blank"
        >Tumor Classification Data Science Model</a
      >
      <br />
      I'm currently working on a project that includes both front-end and back-end with API done in 
      html, css, javascript, python, and Django, and hoping to release it soon here!
    </p>
  </section>
</div>`;
    document.querySelector("#switch-bttn").innerHTML =
      "My High School Life & Summary";
    switched = true;
  } else {
    document.querySelector(".article_block2").innerHTML = `<div
            class="animate__animated animate__bounceInUp p_animate p_duration1"
            id="paragraph_1"
          >
            <h2>
              Introduction
              <span class="font_color1 font_margin"
                ><i class="fab fa-wordpress fa-2x"></i
              ></span>
            </h2>
            <section class="create_new">
              <p>
                Hello everyone! My name is Owen, and I was born in Shanghai,
                China -- one of the busiest, prosperious metropolises. I moved
                to Canada in grade 9. As a newcomer, I struggled to make
                progress in English. However, I always belived in being
                optimistic as it could help me face the challenges positvely.
                That made me brave to speak English with my friends, and took
                the advantage of the environment I was living in to maximally
                elevate my English skills. Meanwhile, I found my career interest
                through trial-and-error in learning new skills across hundreds
                of fields. By spending time probing for different fields of
                study, I became aware of the growth of technology industry. I
                therefore challenged myself by taking Mosh Hamedani's Ultimate
                Java series. After I completed a third of it, I yelled to my
                mom, "This is what I want to do in my future!" My mom also
                supported my choice as she often saw me sitting in front of a
                computer and writing code persistently for 3 hours. -- "Writing
                a program that simulates a real world problem has so much fun!"
                Undaunted by the magic of seeing problems being solved in real
                time, I persisted in acquiring new coding knowldge from Mosh's
                tutorials daily and had taken part in coding competitions held
                by Waterloo (Canadian Computing Competition) in which I scored
                decent marks.
              </p>
            </section>
          </div>
          <div
            class="animate__animated animate__bounceInUp p_animate p_duration2"
            id="paragraph_2"
          >
            <h2>
              Volunteer Experience
              <span class="font_color2 font_margin">
                <i class="fas fa-hands-helping fa-2x"></i>
              </span>
            </h2>
            <section class="create_new">
              <p>
                I have been participating in a variety of volunteer activities
                in community. Last year, I become one of the most popular tutors
                in my school's homework club, and students often feel satisfied
                after being tutored. "Owen is very passionate about teaching and
                his approach of teaching made it easy to understand!" said by
                one of my formal tutees to the club department head. In fact, I
                was always being organized and willing to spend time preparing
                materials for my tutees. That is why the outcome yielded often
                shocked my tutees and myself. Besides the homework club, I was
                also a vice president of Sunshine Foundation Piano Club. This
                club was where I organized events such as a virtual concert
                performance. I also helped raise funds for BC hospital donation,
                especially to kids who were in risks of death because of the
                diseases they have infected. During Covid, I also joined SDC
                (Social Diversity for Children Foundation) charity, raising
                funds to help build classrooms for disabled students through an
                auction event in which they collected 30,000 PPE. Furthermore, I
                had also helped Quantum Academy edit videos for their talent
                shows. They eventually received 10k and donated all of them to
                BC hospitals.
              </p>
            </section>
          </div>
          <div
            class="animate__animated animate__bounceInUp p_animate p_duration3"
            id="paragraph_3"
          >
            <h2 class="div_2">
              Music
              <span class="font_color3 font_margin"
                ><i class="fas fa-music fa-2x"></i
              ></span>
            </h2>
            <section class="create_new">
              <p>
                At young age, I showed my strong passion in music, being
                obsessed with classical music in particular. I started to learn
                piano since I was 4. I insisted on becoming a great musician so
                I practiced piano regularly and assiduously. After I started the
                primary school, tons of district and provincial prizes were
                offered as I constently sharpen my piano skills and learned new
                music pieces in all different styles. I also accomplished RCM
                level 10 practical exam after spending 1 year practicing the
                designated music pieces and got an overall 90% (distinction). I
                was stunned that I received the first place in international
                competitions -- Elite Music International Competition and French
                Vivace International Competition in 2021. Because of my passion
                and accomplishment in music, I would never give up playing
                classical music, catching every little chance to improve my
                artistry further. Moreover, I also think of music as a secondary
                majoring option in university. Therefore, I am planning to join
                the live audition in 2021 in University of Mcgill. Wish me all
                the best!
              </p>
              <p>
                Here's the link to my Youtube Channel. Welcome to subscribe if
                you are interested in!
                <br />
                <a
                  href="https://www.youtube.com/channel/UC2OtGA-R7AToZ7Cl5P6I49w"
                  target="_blank"
                  rel="noopener"
                  >Owen's Youtube Channel</a
                >
              </p>
            </section>
          </div>`;
    document.querySelector("#switch-bttn").innerHTML =
      "My University Life & Summary";
    switched = false;
  }
};
