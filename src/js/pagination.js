const refs = {
  paginationBtn: document.querySelector('.pagination-buttons'),
};

const pageNumbers = (total, max, current) => {
  const half = Math.floor(max / 2);
  let to = max;

  if (current + half >= total) {
    to = total;
  } else if (current > half) {
    to = current + half;
  }

  let from = Math.max(to - max, 0);

  return Array.from({ length: Math.min(total, max) }, (_, i) => i + 1 + from);
};

export const destroyPagination = () => {
  const paginationButtons = document.querySelector('.pagination-buttons');
  if (paginationButtons) {
    paginationButtons.remove();
  }
};

export function createPagination(
  totalPages = 50,
  maxPagesVisible = 5,
  currentPage = 1
) {
  // destroy pagination if it exists already on the page
  const destroy = destroyPagination;

  destroy();

  let pages = pageNumbers(totalPages, maxPagesVisible, currentPage);
  let currentPageBtn = null;
  const buttons = new Map();

  const disabled = {
    start: () => pages[0] === 1,
    prev: () => currentPage === 1 || currentPage > totalPages,
    end: () => pages.slice(-1)[0] === totalPages,
    next: () => currentPage >= totalPages,
  };
  const frag = document.createDocumentFragment();
  const paginationButtonContainer = document.createElement('div');

  paginationButtonContainer.className = 'pagination-buttons';

  const render = (container = document.body) => {
    container.appendChild(paginationButtonContainer);
  };
  const update = (newPageNumber = currentPage) => {
    currentPage = newPageNumber;
    pages = pageNumbers(totalPages, maxPagesVisible, currentPage);
    buttons.forEach((updateButton, btn) => updateButton(btn));
  };

  const onChange = handler => {
    paginationButtonContainer.addEventListener('change', handler);
  };

  const createAndSetupButton = (
    label = '',
    cls = '',
    disabled = false,
    handleClick
  ) => {
    // refs.paginationBtn = buttonElement;
    refs.paginationBtn = document.createElement('button');
    refs.paginationBtn.textContent = label;
    refs.paginationBtn.className = `page-btn ${cls}`;
    refs.paginationBtn.disabled = disabled;
    refs.paginationBtn.addEventListener('click', e => {
      handleClick(e);
      update();
      paginationButtonContainer.value = currentPage;
      paginationButtonContainer.dispatchEvent(
        new CustomEvent('change', { detail: { currentPageBtn } })
      );
    });

    return refs.paginationBtn;
  };

  const onPageButtonClick = e =>
    (currentPage = Number(e.currentTarget.textContent));

  const onPageButtonUpdate = index => btn => {
    btn.textContent = pages[index];

    if (pages[index] === currentPage) {
      currentPageBtn.classList.remove('btn-active');
      btn.classList.add('btn-active');
      currentPageBtn = btn;
      currentPageBtn.focus();
    }
  };

  buttons.set(
    createAndSetupButton(
      'start',
      'start-page',
      disabled.start(),
      () => (currentPage = 1)
    ),
    btn => (btn.disabled = disabled.start())
  );

  buttons.set(
    createAndSetupButton(
      '<<<',
      'prev-page',
      disabled.prev(),
      () => (currentPage -= 1)
    ),
    btn => (btn.disabled = disabled.prev())
  );

  pages.map((pageNumber, index) => {
    const isCurrentPage = currentPage === pageNumber;
    const button = createAndSetupButton(
      pageNumber,
      isCurrentPage ? 'btn-active' : '',
      false,
      onPageButtonClick
    );

    if (isCurrentPage) {
      currentPageBtn = button;
    }

    buttons.set(button, onPageButtonUpdate(index));
  });

  buttons.set(
    createAndSetupButton(
      '>>>',
      'next-page',
      disabled.next(),
      () => (currentPage += 1)
    ),
    btn => (btn.disabled = disabled.next())
  );

  buttons.set(
    createAndSetupButton(
      'end',
      'end-page',
      disabled.end(),
      () => (currentPage = totalPages)
    ),
    btn => (btn.disabled = disabled.end())
  );

  buttons.forEach((_, btn) => frag.appendChild(btn));
  paginationButtonContainer.appendChild(frag);

  return {
    render,
    update,
    onChange,
    destroy,
  };
}
