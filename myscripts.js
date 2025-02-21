function share() {
    let profile = document.querySelector('.profile');
    let icons = document.querySelector('.icons');
    let user = document.querySelector('.user');
    let share = document.querySelector('.share');

    if (icons.style.display === 'none') {
      icons.style.display = 'flex';
      if (window.matchMedia("(max-width: 600px)").matches) {
        profile.style.display = 'none';
        user.style.backgroundColor = '#48546a';

      }
    } else {
      icons.style.display = 'none';
      profile.style.display = 'flex';
      user.style.backgroundColor = '#ffffff';
    }
  }