import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { FormControl, InputGroup, Container } from 'react-bootstrap'
import { Search } from 'react-bootstrap-icons'
import { fetchUnamDicionary } from '../../api/fetchUnamDictionary'
import styles from './Dictionary.module.css';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import DictionaryItem from './DictionaryItem'

const LANGUAGE = {
  NAHUATL: 'nahuatl',
  SPANISH: 'spanish'
}

const Dictionary = () => {
  const [query, setQuery] = useState('');
  const [language, setLanguage] = useState(LANGUAGE.NAHUATL);
  const [queryResult, setQueryResult] = useState([]);

  const handleLanguageSelection = (e, nextLanguage) => {
    setLanguage(nextLanguage);
  }

  const onSearch = async () => {
    const data = await fetchUnamDicionary(language, query);
    setQueryResult(data);
  }

  const renderDictionaryItems = () => {
    return queryResult.map((item, i) => {
      return <DictionaryItem grayBg={i % 2 === 1} item={item} />
    })
  }

  return (
    <div>
      <Container>
        <div className='d-flex justify-content-between align-self-center mb-2'>
          <h5>Gran Diccionario Náhuatl</h5>
          <ToggleButtonGroup
            value={language}
            onChange={handleLanguageSelection}
            exclusive
            color='primary'
          >
            <ToggleButton value={LANGUAGE.NAHUATL} className='p-1'>
              NAH
            </ToggleButton>
            <ToggleButton value={LANGUAGE.SPANISH} className='p-1'>
              ESP
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <InputGroup className="mb-2">
          <InputGroup.Text><Search /></InputGroup.Text>
          <FormControl
            id="query"
            placeholder="Buscar"
            value={query}
            onChange={(e) => { setQuery(e.target.value) }}
          />
          <Button onClick={onSearch}>
            Buscar
          </Button>
        </InputGroup>
      </Container>
      <>
        {renderDictionaryItems()}
      </>
    </div>
  )
}

export default Dictionary
