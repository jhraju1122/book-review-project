import React from 'react';

const PopularLiterature = () => {
    return (
        <div>
            <h1>Hellow I am from popular literature</h1>
            <div class="carousel w-full">
  <div id="slide1" class="carousel-item relative w-full">
    <img id='carrusel-pic' src="https://i.ibb.co/g4mgFVT/aaaaaaad.jpg" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img src="https://i.ibb.co/zQw4k4S/adsasdf.jpg" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
    <img src="https://i.ibb.co/6BVxC0T/asadf.jpg" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" class="carousel-item relative w-full">
    <img src="https://i.ibb.co/9gZPTbd/assasa.jpg" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">❮</a> 
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div>
</div>

{/* card  */}

 <section id='poplit-card' className='grid grid-cols-3 mt-[-350px] mx-14'>
 <div class="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/g4mgFVT/aaaaaaad.jpg" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">single book detailsThe Silent Patient</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div class="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/g4mgFVT/aaaaaaad.jpg" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">single book detailsThe Silent Patient</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div class="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/g4mgFVT/aaaaaaad.jpg" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">single book detailsThe Silent Patient</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div class="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/g4mgFVT/aaaaaaad.jpg " alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">single book detailsThe Silent Patient</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div class="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/g4mgFVT/aaaaaaad.jpg" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">single book detailsThe Silent Patient</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div class="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/g4mgFVT/aaaaaaad.jpg" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">single book detailsThe Silent Patient</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
 </section>
        </div>
    );
};

export default PopularLiterature;