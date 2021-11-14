#ifndef _CLASSES_HPP
#define _CLASSES_HPP

template <typename T>
class Storage
{
public:
  Storage()
      : ARRAY_SIZE(20)
  {
    m_itemCount = 0;
  }

  void Add(T newItem)
  {
    if (m_itemCount == ARRAY_SIZE)
    {
      /* It's full! */
    }
      m_arr[m_itemCount] = newItem;
      m_itemCount++;
  }

  T Get(int index) const
  {
    return m_arr[index];
  }

  int Size() const
  {
    return m_itemCount;
  }

private:
  const int ARRAY_SIZE;
  int m_itemCount;
  T m_arr[20];
};

#endif
