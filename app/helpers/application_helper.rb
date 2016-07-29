module ApplicationHelper
  def active?(page)
    if current_page?(page)
      'active'
    end
  end
end
