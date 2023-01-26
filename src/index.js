/**
 * 할 일 조회 데이터
 * @typedef {Object} TodoItem
 * @property {number} id - 고유번호
 * @property {string} content - 할 일 내용
 * @property {string} category - 카테고리
 * @property {string} tag - 태그
 * @property {boolean} status - 완료 여부
 */

/**
 * 할 일을 추가하는 함수
 * @constructor
 * @param {Object} data - 할 일 목록 정보
 * @param {string} data.content - 할 일 내용
 * @param {string} data.category - 카테고리
 * @param {string=} data.tag - 태그
 * @return {boolean}
 */
function create(data) {}

/**
 * 할 일을 수정하는 함수
 * @constructor
 * @param {number} id - 할 일 고유번호
 * @param {Object} data - 할 일 목록 정보
 * @param {string=} data.content - 할 일 내용
 * @param {string=} data.category - 카테고리
 * @param {string=} data.tag - 태그
 * @param {string=} data.status - 완료 여부
 * @return {boolean}
 */
function patch(id, data) {}

/**
 * 할 일을 삭제하는 함수
 * @constructor
 * @param {number} id - 할 일 고유번호
 * @return {boolean}
 */
function remove(id) {}

/**
 * 할 일 목록 전체를 삭제하는 함수
 * @constructor
 * @return {boolean}
 */
function removeAll() {}

/**
 * 할 일 목록 중 하나를 가져오는 함수
 * @param {number} id - 할 일 목록의 고유번호
 * @return {TodoItem}
 */
function findOne(id) {}

// Use the inline {@link} tag to include a link within a free-form description.
/**
 * 할 일 목록 전체를 가져오는 함수
 * @return {TodoItem[]}
 */
function findAll() {}