export const playAudio = (sound, volume, handleSetDisplay) => {
  handleSetDisplay(sound.id)
  const audio = document.getElementById(sound.key)
  audio.volume = volume
  audio.currentTime = 0
  audio.play()
}
