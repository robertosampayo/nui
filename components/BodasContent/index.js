import { useState, useCallback } from "react";
import Nav from "../NavBar";
import Footer from "../Footer";
import Portfolios from "../Portafolios";
import styles from "./bodasContent.module.scss";
import BannerDetail from "../BannerDetail";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import { photos as photos2 } from "./photos2";
import { photos as photos3 } from "./photos3";
import { photos as photos4 } from "./photos4";
import { portafolios } from "../../utils/portafolios";
import Carousel, { Modal, ModalGateway } from "react-images";

export default function BodasContent() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const [currentImage2, setCurrentImage2] = useState(0);
  const [viewerIsOpen2, setViewerIsOpen2] = useState(false);

  const [currentImage3, setCurrentImage3] = useState(0);
  const [viewerIsOpen3, setViewerIsOpen3] = useState(false);

  const [currentImage4, setCurrentImage4] = useState(0);
  const [viewerIsOpen4, setViewerIsOpen4] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const openLightbox2 = useCallback((event, { photo, index }) => {
    setCurrentImage2(index);
    setViewerIsOpen2(true);
  }, []);

  const openLightbox3 = useCallback((event, { photo, index }) => {
    setCurrentImage3(index);
    setViewerIsOpen3(true);
  }, []);

  const openLightbox4 = useCallback((event, { photo, index }) => {
    setCurrentImage4(index);
    setViewerIsOpen4(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const closeLightbox2 = () => {
    setCurrentImage2(0);
    setViewerIsOpen2(false);
  };

  const closeLightbox3 = () => {
    setCurrentImage3(0);
    setViewerIsOpen3(false);
  };

  const closeLightbox4 = () => {
    setCurrentImage4(0);
    setViewerIsOpen4(false);
  };

  return (
    <div className="home">
      <Nav />

      <main>
        <BannerDetail
          subtitle="Bodas"
          title="Ezequiel y Belen"
          text=""
          seccion="boda1"
        />
        <Gallery photos={photos} onClick={openLightbox} />

        <div className={styles.carrousel}>
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal
                onClose={closeLightbox}
                allowFullscreen={false}
                closeOnEsc={true}
                styles={{ zIndex: "999999999", heigth: "90%" }}
              >
                <Carousel
                  styles={{ zIndex: "999999999", heigth: "90%" }}
                  currentIndex={currentImage}
                  views={photos.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
        <BannerDetail
          subtitle=""
          title="Jeremias y Viviana"
          text=""
          seccion="boda2"
        />
        <Gallery photos={photos2} onClick={openLightbox2} />
        <div className={styles.carrousel}>
          <ModalGateway>
            {viewerIsOpen2 ? (
              <Modal
                onClose={closeLightbox2}
                allowFullscreen={false}
                closeOnEsc={true}
                styles={{ zIndex: "999999999", heigth: "90%" }}
              >
                <Carousel
                  styles={{ zIndex: "999999999", heigth: "90%" }}
                  currentIndex={currentImage2}
                  views={photos2.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
        <BannerDetail
          subtitle=""
          title="Ezequiel y Yanina"
          text=""
          seccion="boda3"
        />
        <Gallery photos={photos3} onClick={openLightbox3} />

        <ModalGateway>
          {viewerIsOpen3 ? (
            <Modal
              onClose={closeLightbox3}
              allowFullscreen={false}
              closeOnEsc={true}
              styles={{ zIndex: "999999999", heigth: "90%" }}
            >
              <Carousel
                styles={{ zIndex: "999999999", heigth: "90%" }}
                currentIndex={currentImage3}
                views={photos3.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>

        <BannerDetail
          subtitle=""
          title="Nestor y Anahi"
          text=""
          seccion="boda4"
        />
        <Gallery photos={photos4} onClick={openLightbox4} />
        <ModalGateway>
          {viewerIsOpen4 ? (
            <Modal
              onClose={closeLightbox4}
              allowFullscreen={false}
              closeOnEsc={true}
              styles={{ zIndex: "999999999", heigth: "90%" }}
            >
              <Carousel
                styles={{ zIndex: "999999999", heigth: "90%" }}
                currentIndex={currentImage4}
                views={photos4.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
        <Portfolios
          items={portafolios.filter(function (item) {
            return [0].indexOf(item.id) === -1;
          })}
        />
      </main>

      <Footer />
    </div>
  );
}
