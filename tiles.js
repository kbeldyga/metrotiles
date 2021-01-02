.start-screen {
  min-width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 20px;
}
.start-screen-title {
  position: fixed;
  top: 20px;
  left: 80px;
  display: none;
}
[class*=tile-] {
  transform: scale(0.8);
}
.tiles-group {
  margin-left: 0;
  margin-top: 50px;
}
@media all and (min-width: 768px) {
  .start-screen-title {
    display: block;
  }
  .start-screen {
    padding: 140px 80px 0 0;
  }
  .tiles-group {
    left: 100px;
  }
  .tiles-group {
    margin-left: 80px;
  }
}