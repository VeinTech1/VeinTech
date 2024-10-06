onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

const surpriseButton = document.getElementById('surpriseButton');
const surpriseMessage = document.getElementById('surpriseMessage');
const confetti = document.getElementById('confetti');
const flowerTitle = document.querySelector('h1');
const content = document.querySelector('.content');  
const body = document.body;  

// Event listener for the surprise button
surpriseButton.addEventListener('click', function() {
  // Remove the hidden class to display the message
  surpriseMessage.classList.remove('hidden');
  confetti.classList.remove('hidden');
  
  // Hide the button and the title after the button is clicked
  surpriseButton.style.display = 'none';
  flowerTitle.classList.add('hidden');

  // Add more confetti elements
  for (let i = 0; i < 80; i++) {
    const confetto = document.createElement('div');
    confetto.classList.add('confetti-piece');
    confetto.style.left = `${Math.random() * 100}%`;
    confetto.style.animationDelay = `${Math.random() * 6}s`;
    confetti.appendChild(confetto);
  }

  // Remove flowers after clicking the button
  const flowers = document.querySelectorAll('.flowers');
  flowers.forEach(function(flower) {
    flower.remove();
  });

  // Change the background color of the content div
  content.style.backgroundColor = 'pink';  

  // Change the background color of the body
  body.style.backgroundColor = 'rgb(255, 164, 180)';  

  // Create a container to hold both GIFs side by side
  const gifContainer = document.createElement('div');
  gifContainer.style.display = 'flex';          // Use flex to align items side by side
  gifContainer.style.justifyContent = 'center'; // Center the GIFs within the parent container
  gifContainer.style.marginTop = '20px';        // Add some margin on top

  // Add the first Giphy embed (left side)
  const gifContainer1 = document.createElement('div');
  gifContainer1.style.width = '50%';                // 50% width for the first GIF
  gifContainer1.style.position = 'relative';        // Position relative
  gifContainer1.style.marginRight = '10px';         // Add a little space between the two GIFs

  const gifIframe1 = document.createElement('iframe');
  gifIframe1.src = 'https://giphy.com/embed/KztT2c4u8mYYUiMKdJ';  
  gifIframe1.width = '100%';                
  gifIframe1.height = 'auto';               
  gifIframe1.style.pointerEvents = 'none';  // Make the GIF not clickable
  gifIframe1.setAttribute('frameBorder', '0');
  gifIframe1.classList.add('giphy-embed');

  gifContainer1.appendChild(gifIframe1);

  // Add the second Giphy embed (right side)
  const gifContainer2 = document.createElement('div');
  gifContainer2.style.width = '50%';                // 50% width for the second GIF
  gifContainer2.style.position = 'relative';        

  const gifIframe2 = document.createElement('iframe');
  gifIframe2.src = 'https://giphy.com/embed/yJQU6eJD2sokaqk7Tb';  
  gifIframe2.width = '100%';                
  gifIframe2.height = 'auto';               
  gifIframe2.style.pointerEvents = 'none';  // Make the GIF not clickable
  gifIframe2.setAttribute('frameBorder', '0');
  gifIframe2.classList.add('giphy-embed');

  gifContainer2.appendChild(gifIframe2);

  // Append both GIF containers to the main container
  gifContainer.appendChild(gifContainer1);
  gifContainer.appendChild(gifContainer2);

  // Append the entire gifContainer to the surpriseMessage
  surpriseMessage.appendChild(gifContainer);
});
