const spacing = document.querySelector('#spacing');
const blur = document.querySelector('#blur');
const baseColor = document.querySelector('#base');

const handleSpacingUpdate = () => {
	console.log(spacing.value);
}

const handleBlurUpdate = () => {
	console.log(blur.value);
}

const handleBaseColorUpdate = () => {
	console.log(baseColor.value);
}

spacing.addEventListener('change', handleSpacingUpdate);
blur.addEventListener('change', handleBlurUpdate);
baseColor.addEventListener('change', handleBaseColorUpdate);