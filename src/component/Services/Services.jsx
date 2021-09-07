import React from "react";
import {
  StyledServices,
  StyledServicesItem, StyledServicesItemDescription,
  StyledServicesItemIcon, StyledServicesItemTitle,
  StyledServicesList,
  StyledServicesTitle
} from "./StyledServices";
import DeliveryIcon from "../../assets/icons/delivery.svg";
import CarIcon from "../../assets/icons/car.svg";
import HomeIcon from "../../assets/icons/Home.svg";


const Services = () => {
  const services = [
    {
      icon: DeliveryIcon,
      title: "Доставка",
      description: "Проверка при получении и возможность бесплатно вернуть товар"
    },
    {
      icon: CarIcon,
      title: "Автотека",
      description: "Отчёт с историей авто: пробег, владельцы, сведения о залоге, ДТП и ремонтах"
    },
    {
      icon: HomeIcon,
      title: "Онлайн-бронирование жилья",
      description: "Посуточная аренда квартир и домов: большой выбор вариантов для поездок по России"
    }
  ]

  let servicesList = services.map((item, index) => {
    return (
      <StyledServicesItem key={index}>
        <StyledServicesItemIcon data={item.icon} type="image/svg+xml">
          <img src={item.icon} alt={item.title}/>
        </StyledServicesItemIcon>

        <StyledServicesItemTitle>
          {item.title}
        </StyledServicesItemTitle>
        <StyledServicesItemDescription>
          {item.description}
        </StyledServicesItemDescription>
      </StyledServicesItem>
    )
  })


  return (
    <StyledServices>
      <StyledServicesTitle>Сервисы и услуги</StyledServicesTitle>
      <StyledServicesList>
        {servicesList}
      </StyledServicesList>
    </StyledServices>
  )
}

export default Services;