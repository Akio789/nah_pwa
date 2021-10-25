import React, { useEffect, useState } from 'react'
import { fetchAllCodex } from '../../api/fetchCodex';
import { fetchAllCulture } from '../../api/fetchCulture';
import { Carousel } from 'react-bootstrap';
import styles from './Culture.module.css';
import { useHistory } from 'react-router-dom';

const Culture = () => {
  const [allCodex, setAllCodex] = useState([]);
  const [allCulture, setAllCulture] = useState([]);
  const [selectedCodex, setSelectedCodex] = useState(0);
  const [selectedCulture, setSelectedCulture] = useState(0);
  const { push } = useHistory();

  useEffect(() => {
    fetchAllCodex().then((data) => {
      const orderedData = data.sort((a, b) => a.id - b.id)
      setAllCodex(orderedData)
    });
    fetchAllCulture().then((data) => {
      const orderedData = data.sort((a, b) => a.id - b.id)
      setAllCulture(orderedData);
    });
  }, [])

  const handleSelectCodex = (selectedIndex) => {
    setSelectedCodex(selectedIndex);
  };

  const handleSelectCulture = (selectedIndex) => {
    setSelectedCulture(selectedIndex);
  };

  const onSelectCodex = () => {
    const actualCodex = selectedCodex + 1;
    push('/codex/' + actualCodex);
  };

  const onSelectCulture = () => {
    const actualCulture = selectedCulture + 1;
    push('/cult/' + actualCulture);
  };

  const codexCarouselItems = allCodex.map((codex) => {
    return (
      <Carousel.Item key={codex.id} className={styles['carousel-item']} onClick={onSelectCodex}>
        {codex.name}
      </Carousel.Item>
    )
  });

  const cultureCarouselItems = allCulture.map((culture) => {
    return (
      <Carousel.Item key={culture.id} className={styles['carousel-item']} onClick={onSelectCulture}>
        {culture.name}
      </Carousel.Item>
    )
  });

  return (
    <div className='container'>
      <h1>Cultura Náhuatl</h1>
      <h2 className='my-4'>Códices</h2>
      <Carousel
        className={styles.carousel}
        interval={null}
        variant="dark"
        activeIndex={selectedCodex}
        onSelect={handleSelectCodex}
      >
        {codexCarouselItems}
      </Carousel>
      <h2 className='my-4'>Cuentos</h2>
      <Carousel
        className={styles.carousel}
        interval={null}
        variant="dark"
        activeIndex={selectedCulture}
        onSelect={handleSelectCulture}
      >
        {cultureCarouselItems}
      </Carousel>
    </div>
  )
}

export default Culture
