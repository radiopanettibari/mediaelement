'use strict';

export default class DefaultPlayer {
	/**
	 *
	 * @param {MediaElementPlayer} player
	 */
	constructor (player) {
		this.media = player.media;
		this.isVideo = player.isVideo;
		this.classPrefix = player.options.classPrefix;
		this.createIframeLayer = () => player.createIframeLayer();
	}

	get paused () {
		return this.media.paused;
	}

	set muted (muted) {
		this.setMuted(muted);
	}

	get muted () {
		return this.media.muted;
	}

	get ended () {
		return this.media.ended;
	}

	get readyState () {
		return this.media.readyState;
	}

	set currentTime (time) {
		this.setCurrentTime(time);
	}

	get currentTime () {
		return this.getCurrentTime();
	}

	get duration () {
		return this.getDuration();
	}

	set volume (volume) {
		this.setVolume(volume);
	}

	get volume () {
		return this.getVolume();
	}

	set src (src) {
		this.setSrc(src);
	}

	get src () {
		return this.getSrc();
	}

	play () {
		const t = this;

		// only load if the current time is 0 to ensure proper playing
		if (t.media.getCurrentTime() <= 0) {
			t.load();
		}
		t.media.play();
	}

	pause () {
		this.media.pause();
	}

	load () {
		const t = this;

		if (!t.isLoaded) {
			t.media.load();
		}

		t.isLoaded = true;
	}

	setCurrentTime (time) {
		this.media.setCurrentTime(time);
	}

	getCurrentTime () {
		return this.media.currentTime;
	}

	getDuration () {
		return this.media.getDuration();
	}

	setVolume (volume) {
		this.media.setVolume(volume);
	}

	getVolume () {
		return this.media.getVolume();
	}

	setMuted (value) {
		this.media.setMuted(value);
	}

	setSrc (src) {
		const
			t = this,
			layer = document.getElementById(`${t.media.id}-iframe-overlay`)
		;

		if (layer) {
			layer.remove();
		}

		t.media.setSrc(src);
		t.createIframeLayer();
	}

	getSrc () {
		return this.media.getSrc();
	}

	canPlayType(type) {
		return this.media.canPlayType(type);
	}
}