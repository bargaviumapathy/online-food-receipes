function scrollToVideos(){
	var videoGalleryDiv = document.querySelector('#videogallery');
	videoGalleryDiv.scrollIntoView(); 
}

function onClickPost(){
	var postedDiv = document.getElementById('commentedPost');
	var commentBox = document.getElementById('commentbox');

	postedDiv.style.display='block';
	postedDiv.innerHTML=commentbox.value;
   
}

function onApplicationLoad(){
	debugger;
	var commentedDiv = document.getElementById('commentedPost');
	commentedDiv.style.display='none';
}