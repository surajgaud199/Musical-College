        const backgroundAudio = document.getElementById('backgroundAudio');
        const toggleSoundButton = document.getElementById('toggleSoundButton');
      
        // Function to toggle sound
        function toggleSound() {
          if (backgroundAudio.paused) {
            backgroundAudio.play();
            toggleSoundButton.textContent = 'Turn Off Sound';
          } else {
            backgroundAudio.pause();
            toggleSoundButton.textContent = 'Turn On Sound';
          }
        }
      
        toggleSoundButton.addEventListener('click', toggleSound);