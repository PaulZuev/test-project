import styled from 'styled-components';


export const FilesItem = styled.div`
  border-bottom: 1px solid #f3f5fb;
  position: relative;
  margin-top: 24px;
`;

export const FilesWrapper =styled.div`
  & > ${FilesItem}:first-child{    
      margin-top: 0px;
    }
`;
export const MenuButton = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: relative;
  margin-right: 0;
  margin-left: auto;
  .actions-menu-button-dots{
    position: absolute;
    top: 10px;
    right: 0px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #0D4CD3;
    &:before, &:after {
      content: "";
      position: absolute;
      top: -6px;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #0D4CD3;
    }
    &:after{
      top: 6px;
    }
  }
`;
export const ActionsMenu = styled.div`
  display: none;
  position: absolute;
  z-index: 2;
  top: -1px;
  right: -1px;
  padding: 16px 48px 0 16px;
  border-radius: 12px;
  box-shadow: 0 12px 32px #0b1f332e;
  background: #ffffff;
  min-width: 240px;
  &.active{
    display: block;
  }
  &.closable{
    padding: 24px 68px 8px 24px;
    top: -24px;
    right: -24px;
    .close-menu{
      position: absolute;
      right: 24px;
      top: 24px;
      width: 24px;
      height: 24px;
      background: url("data:image/svg+xml,%3Csvg width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22 fill%3D%22none%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath fill-rule%3D%22evenodd%22 clip-rule%3D%22evenodd%22 d%3D%22M10.9401 12.0006L4.99902 17.9417L6.05968 19.0024L12.0008 13.0612L17.9418 19.0024L19.0025 17.9417L13.0614 12.0006L19.0025 6.0595L17.9418 4.99884L12.0008 10.9399L6.0597 4.99884L4.99904 6.0595L10.9401 12.0006Z%22 fill%3D%22%230D4CD3%22%2F%3E%3C%2Fsvg%3E") center no-repeat;
      background-size: 24px;
      cursor: pointer;
    }
  }
`;