
var MyHashMap = function ()
{
    this.map = new Array(10 ** 6 + 1).fill(-1); // Khởi tạo mảng với giá trị mặc định -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value)
{
    this.map[key] = value; // Gán giá trị vào vị trí key
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key)
{
    return this.map[key]; // Trả về giá trị, nếu chưa có sẽ là -1
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key)
{
    this.map[key] = -1; // Gán lại -1 để xóa
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */