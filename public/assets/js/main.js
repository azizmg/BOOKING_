// video_player

let video=document.querySelector('video')
let play_btn=document.querySelector('.play_btn')
let vid_img=document.querySelector('.vid_img')

    video.addEventListener('click',function(){
    if(video.paused){
      video.play()
      play_btn.classList.add('d-btn')
      console.log('hey')
    }
   else if(video.played){
    play_btn.classList.remove('d-btn')
    video.pause()
    console.log('why')
   }
})
