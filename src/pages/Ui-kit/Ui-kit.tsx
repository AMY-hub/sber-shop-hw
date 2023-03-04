import React, { useState } from 'react';
import { BaseLink, Button, Counter, InfoCard, Input, Modal, Rating, Search } from '../../components';
import { Panel } from '../../components/ui/Panel';
import { PriceFilterParams } from '../../types/common';

import { ReactComponent as QualityIcon } from '../../assets/icons/quality.svg';
import { ReactComponent as DeliveryIcon } from '../../assets/icons/truck.svg';

export const UI:React.FC = () => {

  const [modalOpened, setModalOpened] = useState<boolean>(false);

  const filterOptions: Record<PriceFilterParams, string> = {
    'price-asc': 'Сначала дешевые',
    'price-desc': 'Сначала дорогие'
  };

  return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '10px',
          padding: '30px'
        }}>
          <Button>default</Button>
          <Button type='fill-secondary'>fill-secondary</Button>
          <Button type='stroke-primary'>stroke-primary</Button>
          <Button type='stroke-secondary'>stroke-secondary</Button>

          <BaseLink>default</BaseLink>
          <BaseLink type='light' as='a' href='https://google.com'
            style={{
              background: 'var(--primary)'
            }}
          >light</BaseLink>
          <BaseLink arrRight type='accent' size='xs' as='a' href='#'>accent xs</BaseLink>
          <BaseLink arrLeft type='plain' as='Link' to='/'>plain</BaseLink>
          <BaseLink arrRight type='plain' size='xl'>plain xl</BaseLink>

          <Input label='Label' error='error message' placeholder='placeholder'/>
          <Input label='Label' type='accent' placeholder='placeholder' />
          <Input label='Label' placeholder='placeholder' />

          <Button 
          onClick={() => setModalOpened(true)}>
            Open modal
          </Button>

          <Search />

          <Modal
            title='Modal title'
            shown={modalOpened}
            onClose={() => setModalOpened(false)}>
            <div>Lorem ipsum dolor sit amet consectetur</div>
          </Modal>

          <Counter 
          count={0} 
          minCount={0}
          onDecrease={() => console.log('decrease')}
          onIncrease={() => console.log('increase')} />

          <Panel 
          onOptionSelect={(option: PriceFilterParams) => console.log(option)}
          options={filterOptions} 
          currentOption={'price-asc'}
          />

          <InfoCard Icon={QualityIcon}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi eum laborum labore voluptate sit ipsa porro, illum autem quod deserunt inventore minima velit in fugit repellat adipisci atque provident debitis.
          </InfoCard>
          <InfoCard Icon={DeliveryIcon}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate soluta provident adipisci ratione ex veniam similique dolores!
          </InfoCard>

          <Rating rating={0} />
          <Rating rating={2} />
          <Rating rating={1.5} />
          <Rating rating={2.83} />
          <Rating rating={3.2} />
          <Rating rating={3.5} />
          <Rating rating={4.45} starsCount={8} />
          <Rating rating={5} />
        </div>
    );
};
