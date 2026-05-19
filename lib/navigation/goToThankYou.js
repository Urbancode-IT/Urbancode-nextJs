/**
 * Full-page navigation to the thank-you URL so Google Tag / GTM
 * page-view conversion triggers fire reliably (client-side router.push does not).
 */
export function goToThankYou(path = '/thankyou') {
  if (typeof window !== 'undefined') {
    window.location.assign(path);
  }
}
