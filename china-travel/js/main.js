/**
 * Hạnh vivu - Landing Page Du Lịch Trung Quốc
 * Interactive JavaScript Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
  }

  // Tour Filter Tabs
  const filterBtns = document.querySelectorAll('.tab-btn');
  const tourCards = document.querySelectorAll('.tour-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      tourCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('hidden');
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.classList.add('hidden');
          }, 200);
        }
      });
    });
  });

  // Tour Modal Details Data
  const tourDatabase = {
    'jiuzhaigou': {
      title: 'Trùng Khánh – Thành Đô – Cửu Trại Câu (6N5Đ)',
      badge: 'No Shop • Bay Thẳng West Air • Tàu Cao Tốc',
      price: '15.990.000đ',
      oldPrice: '17.500.000đ',
      highlights: [
        'Hành trình "No Shop" cao cấp – Hoàn toàn không ép mua sắm',
        'Khám phá Cửu Trại Câu – "Thiên đường hạ giới" với hồ nước ngũ sắc tuyệt mỹ',
        'Trải nghiệm 4 chặng tàu cao tốc hiện đại xuyên lòng Tứ Xuyên',
        'Check-in Hồng Nhai Động Trùng Khánh lung linh như thế giới hoạt hình Vùng Đất Linh Hồn',
        'Thưởng thức Lẩu cay Tứ Xuyên trứ danh & biểu diễn Biến Mặt (Xuyên Kịch)'
      ],
      includes: 'Vé máy bay khứ hồi West Air, 4 chặng tàu cao tốc, khách sạn 4-5 sao, xe du lịch đời mới, các bữa ăn theo tour, visa đoàn, vé thắng cảnh, bảo hiểm du lịch quốc tế.'
    },
    'shanghai': {
      title: 'Thượng Hải – Ô Trấn – Hàng Châu (6N5Đ)',
      badge: 'Đường Bay • Giá Sốc • Khách Sạn 4-5*',
      price: '9.990.000đ',
      oldPrice: '12.990.000đ',
      highlights: [
        'Du ngoạn Tây Hồ Hàng Châu – "Thượng giới có thiên đàng, hạ giới có Tô Hàng"',
        'Ngủ đêm tại Ô Trấn cổ – Cổ trấn sông nước đẹp nhất Giang Nam với đèn lồng lung linh',
        'Check-in Thượng Hải hoa lệ: Bến Thượng Hải, Tháp truyền hình Đông Phương Minh Châu, Phố Nam Kinh',
        'Thưởng thức ẩm thực Giang Nam thanh nhã: Trà Long Tỉnh, Tiểu long bao, sườn chua ngọt'
      ],
      includes: 'Vé máy bay khứ hồi, khách sạn 4 sao tiêu chuẩn, Ô Trấn đêm mộng mơ, du thuyền Tây Hồ, visa đoàn, các bữa ăn trọn gói, bảo hiểm du lịch.'
    },
    'beijing': {
      title: 'Bắc Kinh – Tử Cấm Thành – Vạn Lý Trường Thành (5N4Đ)',
      badge: 'Di Sản Văn Hóa • Bay Thẳng • Vịt Quay Bắc Kinh',
      price: '14.500.000đ',
      oldPrice: '16.200.000đ',
      highlights: [
        'Chinh phục Vạn Lý Trường Thành – Kỳ quan vĩ đại của nhân loại',
        'Khám phá Cố Cung (Tử Cấm Thành) uy nghi, tráng lệ của các triều đại Minh - Thanh',
        'Chiêm ngưỡng Di Hòa Viên (Cung điện Mùa Hè) soi bóng hồ Côn Minh thơ mộng',
        'Thưởng thức đại tiệc Vịt Quay Bắc Kinh thượng hạng chuẩn vị cung đình'
      ],
      includes: 'Vé máy bay khứ hồi, khách sạn 4 sao Bắc Kinh, vé tham quan Cố Cung & Trường Thành, visa đoàn, ăn uống trọn gói, hướng dẫn viên suốt tuyến.'
    },
    'lijiang': {
      title: 'Côn Minh – Lệ Giang – Shangri-La – Đại Lý (6N5Đ)',
      badge: 'Vân Nam Huyền Bí • Núi Tuyết Ngọc Long • No Shop',
      price: '17.990.000đ',
      oldPrice: '19.990.000đ',
      highlights: [
        'Cáp treo chinh phục Núi Tuyết Ngọc Long hùng vĩ ngút ngàn mây trắng',
        'Dạo bước Thành cổ Lệ Giang 800 năm tuổi – Venice của Phương Đông',
        'Khám phá miền đất bất tử Shangri-La, Tu viện Tùng Tán Lâm linh thiêng',
        'Thành cổ Đại Lý thơ mộng – Vùng đất của "Phong - Hoa - Tuyết - Nguyệt"'
      ],
      includes: 'Vé máy bay, tàu cao tốc chặng nội địa Vân Nam, khách sạn 4-5 sao cao cấp, vé cáp treo núi tuyết, show diễn Ấn Tượng Lệ Giang, visa đoàn.'
    },
    'nanning': {
      title: 'Hà Nội – Nam Ninh Chi Dạ – Thái Bình Cổ Trấn (3N2Đ)',
      badge: 'Đường Bộ Tiết Kiệm • Khởi Hành Hàng Tuần',
      price: '3.480.000đ',
      oldPrice: '4.200.000đ',
      highlights: [
        'Đêm Nam Ninh Chi Dạ lung linh huyền ảo – "Phố cổ không ngủ" rực rỡ sắc màu',
        'Check-in Thái Bình Cổ Trấn – Bối cảnh bộ phim bom tấn Hoa Thiên Cốt',
        'Thủ tục visa đoàn cực kỳ đơn giản (chỉ cần ảnh chụp hộ chiếu)',
        'Chi phí siêu tiết kiệm, phù hợp đi cuối tuần cùng gia đình và bạn bè'
      ],
      includes: 'Xe du lịch chất lượng cao từ Hà Nội, khách sạn 4 sao tại Nam Ninh, vé tham quan, visa đoàn nhanh gọn, các bữa ăn chính, HDV nhiệt tình.'
    },
    'harbin': {
      title: 'Bắc Kinh – Cáp Nhĩ Tân – Làng Tuyết Cổ Tích (6N5Đ)',
      badge: 'Thế Giới Băng Đăng • Mùa Đông Độc Bản',
      price: '24.990.000đ',
      oldPrice: '26.900.000đ',
      highlights: [
        'Lễ hội Băng Đăng Quốc tế Cáp Nhĩ Tân – Lâu đài băng tuyết khổng lồ lộng lẫy',
        'Ngôi làng tuyết Hương Tuyết (China Snow Town) với lớp tuyết dày hình nấm như tranh cổ tích',
        'Trải nghiệm tắm khoáng nóng ngoài trời giữa trời tuyết âm độ',
        'Check-in Nhà thờ Saint Sophia phong cách Byzantine cổ kính'
      ],
      includes: 'Vé máy bay khứ hồi + chặng nội địa tàu cao tốc, khách sạn giữ nhiệt tiêu chuẩn cao cấp, trang phục giữ ấm trải nghiệm, visa đoàn, ăn uống ẩm thực Đông Bắc.'
    }
  };

  // Modal Itinerary Handlers
  const itineraryModal = document.getElementById('itineraryModal');
  const openModalBtns = document.querySelectorAll('.open-itinerary-btn');
  const closeModalBtns = document.querySelectorAll('.close-modal-btn');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tourKey = btn.getAttribute('data-tour');
      const data = tourDatabase[tourKey];

      if (data && itineraryModal) {
        document.getElementById('modalTourTitle').textContent = data.title;
        document.getElementById('modalTourBadge').textContent = data.badge;
        document.getElementById('modalTourPrice').textContent = data.price;
        document.getElementById('modalTourOldPrice').textContent = data.oldPrice;

        const highlightsList = document.getElementById('modalTourHighlights');
        highlightsList.innerHTML = '';
        data.highlights.forEach(item => {
          const li = document.createElement('li');
          li.className = 'flex items-start gap-2.5 text-xs md:text-sm text-slate-700';
          li.innerHTML = `<span class="text-red-700 mt-0.5"><i data-lucide="check-circle-2" class="w-4 h-4"></i></span><span>${item}</span>`;
          highlightsList.appendChild(li);
        });

        document.getElementById('modalTourIncludes').textContent = data.includes;
        
        // Update direct booking button in modal
        const bookNowBtn = document.getElementById('modalBookBtn');
        if (bookNowBtn) {
          bookNowBtn.setAttribute('data-tour-title', data.title);
        }

        itineraryModal.classList.remove('hidden');
        itineraryModal.classList.add('flex');
        if (window.lucide) window.lucide.createIcons();
      }
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (itineraryModal) {
        itineraryModal.classList.add('hidden');
        itineraryModal.classList.remove('flex');
      }
      const bookingModal = document.getElementById('bookingModal');
      if (bookingModal) {
        bookingModal.classList.add('hidden');
        bookingModal.classList.remove('flex');
      }
      const successModal = document.getElementById('successModal');
      if (successModal) {
        successModal.classList.add('hidden');
        successModal.classList.remove('flex');
      }
    });
  });

  // Open Quick Booking Modal
  const bookingModal = document.getElementById('bookingModal');
  const openBookingBtns = document.querySelectorAll('.open-booking-btn');

  openBookingBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tourTitle = btn.getAttribute('data-tour-title') || 'Tư vấn tour Trung Quốc';
      const inputTour = document.getElementById('formTourName');
      if (inputTour) inputTour.value = tourTitle;

      if (itineraryModal) {
        itineraryModal.classList.add('hidden');
        itineraryModal.classList.remove('flex');
      }

      if (bookingModal) {
        bookingModal.classList.remove('hidden');
        bookingModal.classList.add('flex');
      }
    });
  });

  // Booking Form Submission & Zalo Redirect
  const bookingForms = document.querySelectorAll('.tour-booking-form');
  bookingForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = form.querySelector('[name="name"]');
      const phoneInput = form.querySelector('[name="phone"]');
      const tourInput = form.querySelector('[name="tour"]');
      const dateInput = form.querySelector('[name="date"]');
      const guestsInput = form.querySelector('[name="guests"]');
      const notesInput = form.querySelector('[name="notes"]');

      const name = nameInput ? nameInput.value.trim() : 'Khách hàng';
      const phone = phoneInput ? phoneInput.value.trim() : '';
      const tour = tourInput ? tourInput.value.trim() : 'Tư vấn tour Trung Quốc';
      const date = dateInput && dateInput.value ? dateInput.value.trim() : 'Dự kiến sớm nhất';
      const guests = guestsInput && guestsInput.value ? guestsInput.value.trim() : '1-2 người';
      const notes = notesInput && notesInput.value ? notesInput.value.trim() : 'Không có';

      // Validate Phone
      if (!phone || phone.length < 9) {
        alert('Vui lòng nhập đúng số điện thoại (Zalo) để Hạnh vivu liên hệ tư vấn ạ!');
        if (phoneInput) phoneInput.focus();
        return;
      }

      // Pre-filled Message for Zalo
      const message = `Chào Hạnh vivu, mình muốn nhận tư vấn & ưu đãi tour Trung Quốc:\n- Họ tên: ${name}\n- Số điện thoại: ${phone}\n- Tuyến tour quan tâm: ${tour}\n- Thời gian dự kiến: ${date}\n- Số lượng khách: ${guests}\n- Ghi chú: ${notes}`;

      const encodedMessage = encodeURIComponent(message);
      const zaloUrl = `https://zalo.me/0911328128?text=${encodedMessage}`;

      // Show Success Modal
      if (bookingModal) {
        bookingModal.classList.add('hidden');
        bookingModal.classList.remove('flex');
      }

      const successModal = document.getElementById('successModal');
      const successLeadName = document.getElementById('successLeadName');
      const successZaloLink = document.getElementById('successZaloLink');

      if (successLeadName) successLeadName.textContent = name;
      if (successZaloLink) successZaloLink.href = zaloUrl;

      if (successModal) {
        successModal.classList.remove('hidden');
        successModal.classList.add('flex');
      }

      // Auto redirect to Zalo after 1.8s
      setTimeout(() => {
        window.open(zaloUrl, '_blank');
      }, 1800);
    });
  });

  // Accordion FAQ / Visa Guide
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const icon = header.querySelector('.accordion-icon');
      const isOpen = !content.classList.contains('hidden');

      // Close all
      document.querySelectorAll('.accordion-content').forEach(c => c.classList.add('hidden'));
      document.querySelectorAll('.accordion-icon').forEach(i => i.style.transform = 'rotate(0deg)');

      if (!isOpen) {
        content.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });
});
