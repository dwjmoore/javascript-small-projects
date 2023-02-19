const spacing = document.querySelector('#spacing');
const blur = document.querySelector('#blur');
const baseColor = document.querySelector('#base');

const handleSpacingUpdate = () => {
	const suffix = spacing.dataset.sizing;
	document.documentElement.style.setProperty('--spacing', spacing.value + suffix);
}

const handleBlurUpdate = () => {
	const suffix = blur.dataset.sizing;
	document.documentElement.style.setProperty('--blur', blur.value + suffix);
}

const handleBaseColorUpdate = () => {
	document.documentElement.style.setProperty('--base', baseColor.value);
}

spacing.addEventListener('change', handleSpacingUpdate);
blur.addEventListener('change', handleBlurUpdate);
baseColor.addEventListener('change', handleBaseColorUpdate);

spacing.addEventListener('mousemove', handleSpacingUpdate);
blur.addEventListener('mousemove', handleBlurUpdate);
baseColor.addEventListener('mousemove', handleBaseColorUpdate);