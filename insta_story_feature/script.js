const characters = [
    {
      dp: "https://i.pinimg.com/736x/e1/d4/68/e1d46817de82b0f38e58333a7291ffce.jpg",
      profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrf1_qBn8HXQHZDJ64uDsRzUzxfVcsANI6A-lpa-tVojTioyQxYafTHaFNedzUGUFsn28&usqp=CAU"
    },
    {
      dp: "https://i.pinimg.com/originals/30/b7/81/30b78118562f0725262249c93297f142.jpg",
      profile: "https://i.pinimg.com/474x/ec/94/5a/ec945a62f2a7c3b362c0692c9bdaf699.jpg"
    },
    {
      dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQltehbQgvJWPCta22cz_2USjmfTLrX1YQfA&s",
      profile: "https://pbs.twimg.com/media/EZ63xRAX0AALair.jpg:large"
    },
    {
      dp: "https://i.pinimg.com/736x/e1/d4/68/e1d46817de82b0f38e58333a7291ffce.jpg",
      profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrf1_qBn8HXQHZDJ64uDsRzUzxfVcsANI6A-lpa-tVojTioyQxYafTHaFNedzUGUFsn28&usqp=CAU"
    },
    {
      dp: "https://i.pinimg.com/originals/30/b7/81/30b78118562f0725262249c93297f142.jpg",
      profile: "https://i.pinimg.com/474x/ec/94/5a/ec945a62f2a7c3b362c0692c9bdaf699.jpg"
    },
    {
      dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQltehbQgvJWPCta22cz_2USjmfTLrX1YQfA&s",
      profile: "https://pbs.twimg.com/media/EZ63xRAX0AALair.jpg:large"
    },
    {
      dp: "https://i.pinimg.com/736x/e1/d4/68/e1d46817de82b0f38e58333a7291ffce.jpg",
      profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrf1_qBn8HXQHZDJ64uDsRzUzxfVcsANI6A-lpa-tVojTioyQxYafTHaFNedzUGUFsn28&usqp=CAU"
    },
    {
      dp: "https://i.pinimg.com/originals/30/b7/81/30b78118562f0725262249c93297f142.jpg",
      profile: "https://i.pinimg.com/474x/ec/94/5a/ec945a62f2a7c3b362c0692c9bdaf699.jpg"
    },
    {
      dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQltehbQgvJWPCta22cz_2USjmfTLrX1YQfA&s",
      profile: "https://pbs.twimg.com/media/EZ63xRAX0AALair.jpg:large"
    }
  ];
  

  const stories = document.querySelector('.stories')
  const story = document.querySelector('.story')
  console.log(story)
  characters.map((val,index)=>{
    stories.innerHTML +=`<img src='${val.dp}' alt="${index}"/>`
  })

  stories.addEventListener('click',(e)=>{
console.log(e)
if(e.target.alt==undefined) return;
const altval = e.target.alt;
const image = characters[altval].profile
story.style.backgroundImage = `url(${image})`;
story.style.display = "initial"; 
setTimeout(() => {
    story.style.display = "none";
}, 1000);
  })