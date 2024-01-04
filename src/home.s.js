export const Home = `
<section id='sec' class="w-screen h-screen flex justify-center items-center ">
<div class="flex flex-col gap-6 w-full justify-center items-center">

  <div class="flex gap-3  justify-center anim-text-wrap">
    <p class="text-white cliptext  text-[30px] md:text-[50px]">CODE + </p>
    <div class="words">
      <span class="text-white cliptext  md:text-[50px]">GOOD DAYS</span>
      <span class="text-white cliptext  text-[30px] md:text-[50px]">BAD DAYS</span>
      <span class="text-white cliptext  text-[30px] md:text-[50px]">ALL DAY</span>
      <span class="text-white cliptext  text-[30px] md:text-[50px]">EVERY DAY</span>
      <span class="text-white cliptext  text-[30px] md:text-[50px]">GOOD DAYS</span>

    </div>

  </div>
  <div>
    <p class="hero-p ">
      This is just a website i am using to keep my designs on check u can acces this file on my github please give a
      star :😊
    </p>
    <div class='nav-btn'>
      <a href='' class="nav-a">github </a>
      <button id="nav-btn-1" class="nav-a">next page </button>
    </div>
  </div>
</div>
</section>

<section id='sec1' class="">

<div class=" z-[20] left-[80%] md:left-[20px]  float-nave hover-effect">

  <button id="up" class="nav-span  hover-effect">&uarr;</button>
  <button id="down" class="nav-span  hover-effect">&darr;</button>
</div>
<div id="one2" class=" sub-section active-section">
  <div class="my-container" id='one2'>

    <div class="cont_for_nav_btn">
      <button id='prev' class="scroll-btn hover-effect">&larr;</button>
      <button id='next-slide' class="scroll-btn hover-effect">&rarr;</button>
    </div>
    <div class="slide">
      <div class="item" style="background-image: url(./users/me0.jpg);">
        <div class="content">
          <div class="name">Name</div>
          <div class="des">Lorem ipsum dolor sit amet possimus nostrum ipsa maiores quibusdam id officiis
            perspiciatis
            magnam.</div>
          <button>More <span>&darr;</span></button>
        </div>
      </div>
      <div class="item" style="background-image: url(./users/me3.jfif);">
        <div class="content">
          <div class="name">Name</div>
          <div class="des">Lorem ipsum dolor sit amet possimus nostrum ipsa maiores quibusdam id officiis
            perspiciatis
            magnam.</div>
          <button>More <span>&darr;</span></button>
        </div>
      </div>
      <div class="item" style="background-image: url(./users/me4.jfif);">
        <div class="content">
          <div class="name">Name</div>
          <div class="des">Lorem ipsum dolor sit amet possimus nostrum ipsa maiores quibusdam id officiis
            perspiciatis
            magnam.</div>
          <button>More <span>&darr;</span></button>
        </div>
      </div>
      <div class="item" style="background-image: url(./users/me5.jfif);">
        <div class="content">
          <div class="name">Name</div>
          <div class="des">Lorem ipsum dolor sit amet possimus nostrum ipsa maiores quibusdam id officiis
            perspiciatis
            magnam.</div>
          <button>More <span>&darr;</span></button>
        </div>
      </div>
      <div class="item" style="background-image: url(./users/me6.jfif);">
        <div class="content">
          <div class="name">Name</div>
          <div class="des">Lorem ipsum dolor sit amet possimus nostrum ipsa maiores quibusdam id officiis
            perspiciatis
            magnam.</div>
          <button>More <span>&darr;</span></button>
        </div>
      </div>
    </div>
  </div>
</div>

<div id='one3' class=" sub-section ">
  <div class="flex-div">
    <div class="left">
      <div class="left-content corrent-left">
        <h3 class="text-white   text-[30px] md:text-[50px]">HEROKU</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptatibus vitae velit unde tempore
          magnam facere placeat corporis maiores molestiae.</p>
      </div>
      <div class="left-content">
        <h3 class="text-white   text-[30px] md:text-[50px]">MASTER MIND</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptatibus vitae velit unde tempore
          magnam facere placeat corporis maiores molestiae.</p>
      </div>
      <div class="left-content">
        <h3 class="text-white   text-[30px] md:text-[50px]">HAROKAN</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptatibus vitae velit unde tempore
          magnam facere placeat corporis maiores molestiae.</p>
      </div>
      <div class="left-content">
        <h3 class="text-white   text-[30px] md:text-[50px]">ELITE</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptatibus vitae velit unde tempore
          magnam facere placeat corporis maiores molestiae.</p>
      </div>
    </div>

    <div class="float-btn-2 ">
      <button id="sm-up" class="hover-effect">&uarr;</but>
        <button id="sm-down" class="hover-effect">&darr;</but>
    </div>
    <div class="right">
      <div class="image-container">
        <div class="image-text corrent-right">
          <img class="image-right-container" src="./users/me0.jpg" alt="slider-image" />
          <div class="text-right-container">
            <h2>Name</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, incidunt.</p>
          </div>
        </div>
        <div class="image-text">
          <img class="image-right-container" src="./users/me8.jfif" alt="slider-image" />
          <div class="text-right-container">
            <h2>Name</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, incidunt.</p>
          </div>
        </div>
        <div class="image-text">
          <img class="image-right-container" src="./users/me7.jfif" alt="slider-image" />
          <div class="text-right-container">
            <h2>Name</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, incidunt.</p>
          </div>
        </div>
        <div class="image-text">
          <img class="image-right-container" src="./users/me2.jfif" alt="slider-image" />
          <div class="text-right-container">
            <h2>Name</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, incidunt.</p>
          </div>
        </div>
        <div class="image-text">
          <img class="image-right-container" src="./users/me3.jfif" alt="slider-image" />
          <div class="text-right-container">
            <h2>Name</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, incidunt.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>

<div id='one4' class=" sub-section">
  <div>
    <h3 class="text-mask">THE MASK</h3>
  </div>
</div>
</section>
`