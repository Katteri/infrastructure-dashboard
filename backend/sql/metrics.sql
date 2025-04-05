SELECT
  datetime, cpu_utilization, memory_utilization, disk_utilization,
  node_id, caption, status, interface, admin
FROM metrics m
	JOIN nodes n ON(m.node_id = n.id)
