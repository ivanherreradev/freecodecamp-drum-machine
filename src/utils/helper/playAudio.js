export const playAudio = (sound, handleSetDisplay) => {
  handleSetDisplay(sound.id)
  const audio = document.getElementById(sound.key)
  audio.currentTime = 0
  audio.play()
}
