// Nothing is implemented here. These are the two moving parts.
// How you build them — and what edge cases you handle — is the test.

// --- Countdown -------------------------------------------------------
// Target: #countdown in index.html
// Read the client's notes for the date. Think about:
//   - what shows when the event has already passed
//   - which timezone the date means
// TODO: implement.
;(function(){
	// Event: Friday, 14 August 2026, 7:00 PM (local time)
	const eventDate = new Date(2026, 7, 14, 19, 0, 0);
	const el = document.getElementById('countdown');

	function fmt(n){ return String(n).padStart(2,'0'); }

	function render(values){
		if(!el) return;
		const container = el.querySelector('.countdown');
		if(!container) return;
		container.querySelectorAll('.cd-item').forEach((item, i)=>{
			const span = item.querySelector('.cd-num');
			if(!span) return;
			if(i===0) span.textContent = values.days;
			if(i===1) span.textContent = values.hours;
			if(i===2) span.textContent = values.minutes;
			if(i===3) span.textContent = values.seconds;
		});
	}

	function update(){
		if(!el) return;
		const now = new Date();
		let diff = eventDate - now;
		if(diff <= 0){
			el.classList.add('countdown--ended');
			// show zeros and a message above
			render({days:'00', hours:'00', minutes:'00', seconds:'00'});
			const label = document.createElement('div');
			label.className = 'event-label';
			label.textContent = 'Event started';
			label.style.marginTop = '8px';
			label.style.fontWeight = '700';
			label.style.color = 'var(--neon-primary)';
			if(!el.querySelector('.event-label')) el.appendChild(label);
			return;
		}

		const sec = Math.floor(diff/1000) % 60;
		const min = Math.floor(diff/1000/60) % 60;
		const hrs = Math.floor(diff/1000/60/60) % 24;
		const days = Math.floor(diff/1000/60/60/24);
		render({days:fmt(days), hours:fmt(hrs), minutes:fmt(min), seconds:fmt(sec)});
	}

	update();
	setInterval(update, 1000);
})();

// Optimize background videos for mobile devices to reduce lag.
(function(){
	async function optimizeVideos(){
		const ids = ['page-bg-video','hero-video'];
		for(const id of ids){
			const v = document.getElementById(id);
			if(!v) continue;
			const defaultSrc = v.dataset && v.dataset.src ? v.dataset.src : null;
			const smallSrc = v.dataset && v.dataset.srcSmall ? v.dataset.srcSmall : null;

			// If device is narrow, prefer a small video if available.
			const isNarrow = window.innerWidth <= 520;

			if(isNarrow){
				if(smallSrc){
					try{
						// Check if small asset exists (HEAD request).
						const res = await fetch(smallSrc, { method: 'HEAD' });
						if(res && res.ok){
							v.innerHTML = `<source src="${smallSrc}" type="video/mp4">`;
							// don't set poster on narrow devices to avoid extra image download
							v.setAttribute('preload','auto');
							v.load();
							v.play().catch(()=>{});
							continue;
						}
					}catch(e){ /* fallthrough to hiding video */ }
				}

				// No small video available — hide heavy video on narrow devices so poster image shows.
				v.pause();
				// Remove sources/poster to avoid any network requests
				v.innerHTML = '';
				v.removeAttribute('poster');
				v.style.display = 'none';
				continue;
			}

			// For wider devices, load default source lazily and set poster if provided.
			if(defaultSrc){
				try{
					if(v.dataset && v.dataset.poster){
					  v.setAttribute('poster', v.dataset.poster);
					}
					v.innerHTML = `<source src="${defaultSrc}" type="video/mp4">`;
					v.setAttribute('preload','metadata');
					v.load();
					v.play().catch(()=>{});
				}catch(e){/* ignore */}
			}
		}
	}

	window.addEventListener('DOMContentLoaded', ()=>{ optimizeVideos(); });
	// Re-run on orientation/resize to handle device rotation.
	window.addEventListener('resize', ()=>{ optimizeVideos(); });
})();

// --- Accent (neon/subtle) toggle -----------------------------------
(function(){
	const btn = document.getElementById('accent-toggle');
	const key = 'nn-accent';

	function setAccent(accent){
		if(accent === 'neon'){
			document.documentElement.setAttribute('data-accent','neon');
			if(btn) { btn.setAttribute('aria-pressed','true'); btn.textContent = '⚡'; }
		} else {
			document.documentElement.removeAttribute('data-accent');
			if(btn) { btn.setAttribute('aria-pressed','false'); btn.textContent = '◦'; }
		}
		try{ localStorage.setItem(key, accent); }catch(e){}
	}

	// restore saved accent
	try{
		const saved = localStorage.getItem(key);
		if(saved) setAccent(saved);
		else setAccent('neon'); // default to neon enabled; change as desired
	}catch(e){ setAccent('neon'); }

	if(btn){
		btn.addEventListener('click', ()=>{
			const isNeon = document.documentElement.getAttribute('data-accent') === 'neon';
			setAccent(isNeon ? 'subtle' : 'neon');
		});
	}
})();
// --- Dark-mode toggle ------------------------------------------------
// Wire up the header toggle.
// TODO: implement — and check the whole page stays readable in both modes.
;(function(){
	const btn = document.getElementById('theme-toggle');
	const key = 'nn-theme';

	function setTheme(theme){
		if(theme === 'dark'){
			document.documentElement.setAttribute('data-theme','dark');
			if(btn) btn.textContent = '☀️';
		} else {
			document.documentElement.removeAttribute('data-theme');
			if(btn) btn.textContent = '🌙';
		}
		try{ localStorage.setItem(key, theme); }catch(e){}
	}

	// restore
	try{
		const saved = localStorage.getItem(key);
		if(saved) setTheme(saved);
	}catch(e){}

	if(btn){
		btn.addEventListener('click', ()=>{
			const dark = document.documentElement.getAttribute('data-theme') === 'dark';
			setTheme(dark ? 'light' : 'dark');
		});
	}
})();

// --- Signup form handling -------------------------------------------
(function(){
	const form = document.getElementById('signup-form');
	const msg = document.getElementById('signup-message');
	if(!form) return;
	form.addEventListener('submit', (e)=>{
		e.preventDefault();
		const f = new FormData(form);
		const email = (f.get('email')||'').toString().trim();
		if(!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){
			if(msg) msg.textContent = 'Please enter a valid email address.';
			return;
		}
		if(msg) msg.textContent = 'Saving...';
		// Since this is a static starter, we'll simulate a successful save.
		setTimeout(()=>{
			if(msg) msg.textContent = 'Thanks — you are signed up! (simulated)';
			form.reset();
		}, 700);
	});
})();

// --- Show lineup toggle --------------------------------------------
(function(){
	const btn = document.getElementById('show-lineup-toggle');
	const details = document.getElementById('show-lineup');
	if(!btn || !details) return;
	btn.addEventListener('click', ()=>{
		const open = !details.hasAttribute('hidden');
		if(open){ details.setAttribute('hidden',''); btn.textContent = 'View lineup'; }
		else { details.removeAttribute('hidden'); btn.textContent = 'Hide lineup'; }
	});
})();
