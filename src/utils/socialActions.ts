export const openWhatsAppChat = () => {
  const phoneNumber = "201119926330";
  const message =
    "Hi, I am interested in your event management services! I am looking for...";

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(url, "_blank");
};

export const openInstagramPage = () => {
  const instagramUsername = "eventale.co";

  // Instagram URL scheme for mobile
  const mobileUrl = `instagram://user?username=${instagramUsername}`;

  // Fallback URL for desktop
  const webUrl = `https://www.instagram.com/${instagramUsername}/`;

  // Check if the device is mobile
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // Open the appropriate URL
  if (isMobile) {
    window.location.href = mobileUrl;
  } else {
    window.open(webUrl, "_blank");
  }
};

export const openFacebookPage = () => {
  const facebookUsername = "profile.php?id=61562400577901";

  // Facebook URL scheme for mobile
  const mobileUrl = `fb://profile/${facebookUsername}`;

  // Fallback URL for desktop
  const webUrl = `https://www.facebook.com/${facebookUsername}`;

  // Check if the device is mobile
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // Open the appropriate URL
  if (isMobile) {
    window.location.href = mobileUrl;
  } else {
    window.open(webUrl, "_blank");
  }
};

export const openAstraWebs = () => {
  window.open("https://www.astrawebs.com", "_blank");
};
