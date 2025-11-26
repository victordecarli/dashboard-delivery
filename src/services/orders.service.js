import { supabase } from '@/lib/supabase';

export const ordersService = {
  async getAll() {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select(`
          *,
          users:user_id (id, email, name, role),
          products:product_id (id, name, description, price, is_active)
        `)
        .order('id', { ascending: false });

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error('Erro ao buscar pedidos:', error);
      return { data: null, error };
    }
  },

  async getById(id) {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select(`
          *,
          users:user_id (id, email, name, role),
          products:product_id (id, name, description, price, is_active)
        `)
        .eq('id', id)
        .single();

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error('Erro ao buscar pedido:', error);
      return { data: null, error };
    }
  },

  async create(orderData) {
    try {
      const { data, error } = await supabase
        .from('orders')
        .insert([
          {
            user_id: orderData.user_id,
            product_id: orderData.product_id,
            quantity: orderData.quantity,
          },
        ])
        .select(`
          *,
          users:user_id (id, email, name, role),
          products:product_id (id, name, description, price, is_active)
        `)
        .single();

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error('Erro ao criar pedido:', error);
      return { data: null, error };
    }
  },

  async update(id, orderData) {
    try {
      const updateData = {};
      if (orderData.user_id !== undefined) updateData.user_id = orderData.user_id;
      if (orderData.product_id !== undefined) updateData.product_id = orderData.product_id;
      if (orderData.quantity !== undefined) updateData.quantity = orderData.quantity;

      const { data, error } = await supabase
        .from('orders')
        .update(updateData)
        .eq('id', id)
        .select(`
          *,
          users:user_id (id, email, name, role),
          products:product_id (id, name, description, price, is_active)
        `)
        .single();

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error('Erro ao atualizar pedido:', error);
      return { data: null, error };
    }
  },

  async delete(id) {
    try {
      const { error } = await supabase
        .from('orders')
        .delete()
        .eq('id', id);

      if (error) throw error;
      return { data: true, error: null };
    } catch (error) {
      console.error('Erro ao deletar pedido:', error);
      return { data: null, error };
    }
  },

  async getByUserId(userId) {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select(`
          *,
          users:user_id (id, email, name, role),
          products:product_id (id, name, description, price, is_active)
        `)
        .eq('user_id', userId)
        .order('id', { ascending: false });

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error('Erro ao buscar pedidos do usuário:', error);
      return { data: null, error };
    }
  },
};
