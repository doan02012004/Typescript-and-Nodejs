const attribute = require('../models/attribute');
const attributeModel = attribute.AttributeModel
const valueAttributeModel = attribute.ValueAttributeModel
// Controller để tạo mới một thuộc tính
 const createAttribute = async (req, res) => {
    try {
        const { name } = req.body;
        const attribute = new attributeModel({
            name,
        });
        const newAttribute = await attribute.save();
        res.status(201).json(newAttribute);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller để lấy tất cả các thuộc tính
 const getAllAttributes = async (req, res) => {
    try {
        const attributes = await attributeModel.find().populate("values");
        res.json(attributes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller để lấy một thuộc tính theo ID
 const getAttributeById = async (req, res) => {
    try {
        const attribute = await attributeModel.findById(req.params.id).populate("values");
        if (!attribute) {
            return res.status(404).json({ message: "Attribute not found" });
        }
        res.json(attribute);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller để cập nhật một thuộc tính
 const updateAttribute = async (req, res) => {
    try {
        const { name } = req.body;
        const attribute = await attributeModel.findById(req.params.id);
        if (!attribute) {
            return res.status(404).json({ message: "Attribute not found" });
        }
        attribute.name = name;
        const updatedAttribute = await attribute.save();
        res.json(updatedAttribute);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller để xóa một thuộc tính
 const deleteAttribute = async (req, res) => {
    try {
        const attribute = await attributeModel.findById(req.params.id);
        if (!attribute) {
            return res.status(404).json({ message: "Attribute not found" });
        }
        await attribute.remove();
        res.json({ message: "Attribute deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//==================================== VALUE ============================================

// Controller để tạo mới một giá trị của thuộc tính
 const createValueAttribute = async (req, res) => {
    try {
        const { name, price, quantity } = req.body;
        const attribute = await attributeModel.findById(req.params.id);
        if (!attribute) {
            return res.status(404).json({ message: "Attribute not found" });
        }
        const valueAttribute = new valueAttributeModel({
            name,
            price,
            quantity,
        });
        const newValueAttribute = await valueAttribute.save();
        attribute.values.push(newValueAttribute);
        await attribute.save();
        res.status(201).json(newValueAttribute);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller để lấy tất cả các giá trị của thuộc tính
 const getAllValueAttributes = async (req, res) => {
    try {
        const values = await valueAttributeModel.find();
        res.json(values);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller để lấy một giá trị của thuộc tính theo ID
 const getValueAttributeById = async (req, res) => {
    try {
        const value = await valueAttributeModel.findById(req.params.id);
        if (!value) {
            return res.status(404).json({ message: "ValueAttribute not found" });
        }
        res.json(value);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller để cập nhật một giá trị của thuộc tính
 const updateValueAttribute = async (req, res) => {
    try {
        const { name, price, quantity } = req.body;
        const value = await valueAttributeModel.findById(req.params.id);
        if (!value) {
            return res.status(404).json({ message: "ValueAttribute not found" });
        }
        value.name = name;
        value.price = price;
        value.quantity = quantity;
        const updatedValue = await value.save();
        res.json(updatedValue);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller để xóa một giá trị của thuộc tính
 const deleteValueAttribute = async (req, res) => {
    try {
        const value = await valueAttributeModel.findById(req.params.id);
        if (!value) {
            return res.status(404).json({ message: "ValueAttribute not found" });
        }
        await value.remove();
        res.json({ message: "ValueAttribute deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createAttribute,
    deleteValueAttribute,
    updateValueAttribute,
    getValueAttributeById,
    getAllValueAttributes,
    createValueAttribute,
    deleteAttribute,
    updateAttribute,
    getAttributeById,
    getAllAttributes
}