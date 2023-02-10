import CategoryRadioInput from 'components/CategoryRadioInput';

import * as styled from './NoticeCategories.styled';

const NoticeCategories = ({ categories }) => {
  return (
    <styled.CategoryList>
      {categories.map(category => (
        <styled.CategoryItem key={category}>
          <CategoryRadioInput name="category" value={category} id={category} />
        </styled.CategoryItem>
      ))}
    </styled.CategoryList>
  );
};

export default NoticeCategories;
